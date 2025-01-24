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
}

const storedFeatures = localStorage.getItem('features');
const  features = storedFeatures ? JSON.parse(storedFeatures) : [];
console.log('Loaded features from localStorage:', localStorage.getItem('features'));

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
    totalPages: Math.ceil(features.length / 5),
    limit: 5
}

export const createFeatureRequest = createAsyncThunk<{ feature: Feature; message: string }, FeatureFormData, { rejectValue: string }>('feature/create-feature-request', async (featureData, thunkApi) => {
    try {
        const response = await featureService.createFeatureRequest(featureData);
        return response;
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'feature request creation failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
    }
})
// export const getAllFeatureRequest = createAsyncThunk<{ features: Feature[]; message: string; pagination: { currentPage: number, totalPages: number } }, number, { rejectValue: string }
// >("feature/getAll", async (page: number, thunkApi) => {
//     try {
//         const response = await featureService.getAllFeatureRequest(page);
//         return { features: response.features, message: response.message, pagination: response.pagination };
//     } catch (error: any) {
//         const message =
//             error.response?.data?.message || error.message || "Failed to fetch features";
//         return thunkApi.rejectWithValue(message);
//     }
// });
export const getAllFeatureRequest = createAsyncThunk<
    { features: Feature[]; message: string },
    void,
    { rejectValue: string }
>("feature/getAll", async (_, thunkApi) => {
    try {
        const response = await featureService.getAllFeatureRequest();
        return { features: response.features, message: response.message };
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
        console.log(message)
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
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
            const startIndex = (state.currentPage - 1) * state.limit;
            const endIndex = startIndex + state.limit;
            state.displayedFeatures = state.features.slice(startIndex, endIndex);
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
            
                const newFeature = action.payload.feature;
            
                // Ensure features is always an array (fallback to empty array if null)
                if (!state.features) {
                    state.features = [];
                }
            
                console.log('Current features before adding new feature:', state.features);
                console.log('New feature to add:', newFeature);
            
                // Add new feature immutably
                state.features = [newFeature, ...state.features];
            
                // Calculate pagination
                state.totalPages = Math.ceil(state.features.length / state.limit);
                const startIndex = (state.currentPage - 1) * state.limit;
                const endIndex = startIndex + state.limit;
                state.displayedFeatures = state.features.slice(startIndex, endIndex);
            
                // Log the updated features to be saved
                console.log('Updated features to save to localStorage:', state.features);
            
                // Save updated features to localStorage
                localStorage.setItem('features', JSON.stringify(state.features));
            
                state.message = action.payload.message
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
                state.features = action.payload.features;
                localStorage.setItem('features', JSON.stringify(state.features));
                console.log('Updated features (getAll):', state.features); // Should show fetched features
                console.log('Displayed features (getAll):', state.displayedFeatures);
                state.totalPages = Math.ceil(action.payload.features.length / state.limit);
                // Recalculate displayedFeatures based on the current page
                const startIndex = (state.currentPage - 1) * state.limit;
                const endIndex = startIndex + state.limit;
                state.displayedFeatures = state.features.slice(startIndex, endIndex);
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
                state.isLoading = false
                state.isVoteSuccess = true
                state.message = action.payload.message;
                // Update feature in the list
                const updatedFeature = action.payload.feature;
                const index = state.features.findIndex((f) => f._id === updatedFeature._id);
                if (index !== -1) {
                    state.features[index] = updatedFeature;
                }
                // Update displayed features for the current page
                const startIndex = (state.currentPage - 1) * state.limit;
                const endIndex = startIndex + state.limit;
                state.displayedFeatures = state.features.slice(startIndex, endIndex);
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