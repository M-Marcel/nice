import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Feature, FeatureFormData } from "../../dataTypes";
import featureService from "../../helpers/featureService";
import { toast } from "react-toastify";

type InitialState = {
    feature: Feature | null
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
}

const storedCreatedFeature = localStorage.getItem('feature');
const feature = storedCreatedFeature ? JSON.parse(storedCreatedFeature) : null;

const initialState: InitialState = {
    feature: feature ? feature : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const createFeatureRequest = createAsyncThunk<{ feature: Feature; message: string }, FeatureFormData, { rejectValue: string }>('auth/create-feature-request', async (featureData, thunkApi) => {
    try {
        const response = await featureService.createFeatureRequest(featureData);
        return response;
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'feature request creation failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
    }
})

const featureSlice = createSlice({
    name: 'feature',
    initialState,
    reducers: {
        reset:(state) => {
            state.isLoading = false
            state.isSuccess = false
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
    }
})

export const { reset } = featureSlice.actions
export default featureSlice.reducer