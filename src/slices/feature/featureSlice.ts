import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Feature, FeatureFormData } from "../../dataTypes";
import featureService from "../../helpers/featureService";
import { toast } from "react-toastify";


type InitialState = {
    feature: Feature | null
    features: Feature[]
    displayedFeatures: Feature[],
    isError: boolean
    isSuccess: boolean
    isVoteSuccess: boolean
    isFetchRequestSuccess: boolean
    isLoading: boolean
    message: string
    currentPage: number;
    totalPages: number;
    limit: number;
    total: number;
}

const storedFeatures = localStorage.getItem('features');
const features = storedFeatures ? JSON.parse(storedFeatures) : [];


const storedCreatedFeature = localStorage.getItem('feature');
const feature = storedCreatedFeature ? JSON.parse(storedCreatedFeature) : null;

const initialState: InitialState = {
    feature: feature ? feature : null,
    features: features,
    displayedFeatures: [],
    isError: false,
    isFetchRequestSuccess: false,
    isVoteSuccess: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    currentPage: 1,
    totalPages: 10,
    limit: 5,
    total: 0,
}

export const createFeatureRequest = createAsyncThunk<{ feature: Feature; message: string }, FeatureFormData, { rejectValue: string }>('feature/create-feature-request', async (featureData, thunkApi) => {
    try {
        const response = await featureService.createFeatureRequest(featureData);
        return response;
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'feature request creation failed';

        return thunkApi.rejectWithValue(message)
    }
})

export const getAllFeatureRequest = createAsyncThunk<
  { 
    features: Feature[]; 
    pagination: { 
      currentPage: number; 
      totalPages: number; 
      total: number; 
      pageSize: number 
    }; 
    message: string 
  },
  { page: number; pageSize: number },
  { rejectValue: string }
>("feature/getAll", async ({ page, pageSize }, thunkApi) => {
  try {
    return await featureService.getAllFeatureRequest(page, pageSize);
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || "Failed to fetch features";
    return thunkApi.rejectWithValue(message);
  }
});


export const voteFeatureRequest = createAsyncThunk<{ feature: Feature; message: string }, string, { rejectValue: string }>('feature/vote-feature-request', async (id: string, thunkApi) => {
    try {
        const response = await featureService.voteFeatureRequest(id);
        return response;
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'feature request vote failed';

        return thunkApi.rejectWithValue(message)
    }
})

const featureSlice = createSlice({
    name: 'feature',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isFetchRequestSuccess = false
            state.isVoteSuccess = false
            state.isError = false
            state.message = ''
            state.features = [];
            state.displayedFeatures = [];
            state.currentPage = 1;
            state.totalPages = 5;
            state.limit = 5;
            state.total = 0;
        },
        setPage: (state, action) => {
            if (state.currentPage !== action.payload) {
                state.currentPage = action.payload;
                const startIndex = (state.currentPage - 1) * state.limit;
                const endIndex = startIndex + state.limit;
                state.displayedFeatures = state.features.slice(startIndex, endIndex);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createFeatureRequest.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createFeatureRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
              
                // Ensure features is always an array
                const currentFeatures = Array.isArray(state.features) ? state.features : [];
                state.features = [action.payload.feature, ...currentFeatures];
                
                // Reset to first page
                state.currentPage = 1;
                state.totalPages = Math.ceil(state.features.length / state.limit);
                
                // Update displayed features
                const startIndex = (state.currentPage - 1) * state.limit;
                const endIndex = startIndex + state.limit;
                state.displayedFeatures = state.features.slice(startIndex, endIndex);
              
                localStorage.setItem('features', JSON.stringify(state.features));
                state.message = action.payload.message;
            })
            .addCase(createFeatureRequest.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
                state.feature = null
                toast.error(action.payload)
            })
            .addCase(getAllFeatureRequest.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllFeatureRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isFetchRequestSuccess = true;
                
                // Reset features array if it's the first page
                if (action.payload.pagination.currentPage === 1) {
                    state.features = action.payload.features;
                } else {
                    // Append new features to the existing features array
                    state.features = [...state.features, ...action.payload.features];
                }
            
                // Safely access pagination properties with fallbacks
                const pagination = action.payload.pagination || {
                    currentPage: state.currentPage,
                    totalPages: state.totalPages,
                    total: state.total,
                    pageSize: state.limit
                };
            
                state.currentPage = pagination.currentPage;
                state.totalPages = pagination.totalPages;
                state.total = pagination.total;
                state.limit = pagination.pageSize;
            
                const startIndex = (state.currentPage - 1) * state.limit;
                const endIndex = startIndex + state.limit;
                state.displayedFeatures = state.features.slice(startIndex, endIndex);
            
                localStorage.setItem('features', JSON.stringify(state.features));
                state.message = action.payload.message;
            })
            .addCase(getAllFeatureRequest.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
                state.features = []
                state.displayedFeatures = []
                // toast.error(action.payload)
            })
            .addCase(voteFeatureRequest.pending, (state) => {
                state.isLoading = true
            })
            .addCase(voteFeatureRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isVoteSuccess = true;
                
                // Update the specific feature
                const featureIndex = state.features.findIndex(
                  f => f._id === action.payload.feature._id
                );
                
                if (featureIndex !== -1) {
                  state.features[featureIndex] = action.payload.feature;
                }
                
                // Update displayed features
                const startIndex = (state.currentPage - 1) * state.limit;
                const endIndex = startIndex + state.limit;
                state.displayedFeatures = state.features.slice(startIndex, endIndex);
                
                state.message = action.payload.message;
              })
              
              
            .addCase(voteFeatureRequest.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                const errorMessage = action.payload as string;
                state.message = errorMessage;
                state.feature = null
                // toast.error(errorMessage)
            })
    }
})

export const { reset, setPage } = featureSlice.actions
export default featureSlice.reducer