import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Feature, FeatureFormData } from "../../dataTypes";
import featureService from "../../helpers/featureService";
import { toast } from "react-toastify";


type InitialState = {
    feature: Feature | null
    features:Feature[] | null
    isError: boolean
    isSuccess: boolean
    isFetchRequestSuccess:boolean
    isLoading: boolean
    message: string
}

const storedCreatedFeature = localStorage.getItem('feature');
const feature = storedCreatedFeature ? JSON.parse(storedCreatedFeature) : null;

const initialState: InitialState = {
    feature: feature ? feature : null,
    features:  null,
    isError: false,
    isFetchRequestSuccess:false,
    isSuccess: false,
    isLoading: false,
    message: ""
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
export const getAllFeatureRequest = createAsyncThunk<{ features: Feature[]; message: string },void,{ rejectValue: string }
>("feature/getAll", async (_, thunkApi) => {
  try {
    const response = await featureService.getAllFeatureRequest();
    return { features: response.feature, message: response.message };
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || "Failed to fetch features";
    return thunkApi.rejectWithValue(message);
  }
});

const featureSlice = createSlice({
    name: 'feature',
    initialState,
    reducers: {
        reset:(state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isFetchRequestSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(createFeatureRequest.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createFeatureRequest.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.feature = action.payload.feature
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
            state.isLoading = false
            state.isFetchRequestSuccess = true
            state.features = action.payload.features
            state.message = action.payload.message;
        })
        .addCase(getAllFeatureRequest.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload as string
            state.features = null
            toast.error(action.payload)
        })
    }
})

export const { reset } = featureSlice.actions
export default featureSlice.reducer