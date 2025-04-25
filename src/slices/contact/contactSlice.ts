import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import contactService from "../../helpers/contactService";

type InitialState = {
    message: string;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: string | null;
}

const initialState: InitialState = {
    message: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
}

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    files?: File | null;
}

export const sendContactMessage = createAsyncThunk<{ message: string }, ContactFormData, { rejectValue: string }>(
    'contact/send-message',
    async (contactData, thunkApi) => {
        try {
            const response = await contactService.sendContactMessage(contactData);
            return response;
        } catch (error: any) {
            const message = error.response?.data?.message || error.message || 'Failed to send message';
            return thunkApi.rejectWithValue(message);
        }
    }
);

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendContactMessage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(sendContactMessage.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.message = action.payload.message;
                toast.success(action.payload.message);
            })
            .addCase(sendContactMessage.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.payload as string;
                state.message = action.payload as string;
                toast.error(action.payload as string);
            });
    }
});

export const { reset } = contactSlice.actions;
export default contactSlice.reducer;