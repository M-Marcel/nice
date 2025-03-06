import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Template } from "../../dataTypes";
import templateService from "../../helpers/templateService";
import { toast } from "react-toastify";

type InitialState = {
    templates: Template[]
    template: Template | null
    pagination: {
        total: number
        currentPage: number
        totalPages: number
        pageSize: number
    }
    message: string;
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    error: string | null;
}

const initialState: InitialState = {
    templates: [],
    template: null,
    pagination: {
        total: 0,
        currentPage: 1,
        totalPages: 1,
        pageSize: 5,
    },
    message: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
}

export const getTemplates = createAsyncThunk(
    "templates/fetchTemplates",
    async (
        { page, pageSize }: { page: number; pageSize: number },
        { rejectWithValue }
    ) => {
        try {
            const response = await templateService.getAllTemplates(page, pageSize);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const getTemplateById = createAsyncThunk(
    "templates/fetchTemplateById",
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await templateService.getTemplateById(id);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const templateSlice = createSlice({
    name: "template",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
         
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(getTemplates.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTemplates.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.templates = action.payload.templates;
                state.pagination = action.payload.pagination;
                state.message = action.payload.message;
            })
            // Handle fetchTemplates rejected state
            .addCase(getTemplates.rejected, (state, action) => {
                state.isError = true;
                state.error = action.payload as string;
                state.message = action.payload as string;
                toast.error(action.payload as string)
            })
            // Handle getTemplateById
            .addCase(getTemplateById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTemplateById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.template = action.payload.template;
                state.message = action.payload.message;
            })
            .addCase(getTemplateById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload as string;
                state.message = action.payload as string;
                toast.error(action.payload as string);
            });
    }
})

export const { reset } = templateSlice.actions;
export default templateSlice.reducer;