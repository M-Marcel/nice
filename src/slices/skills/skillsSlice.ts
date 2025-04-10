import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category,  Skill } from "../../dataTypes";
import { toast } from "react-toastify";
import skillsService from "../../helpers/skillsService";

type InitialState = {
    allSkills: Skill[]
    selectedSkills: string[]
    categories: Category[]
    message: string;
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    error: string | null;
}

const initialState: InitialState = {
    allSkills: [],
    selectedSkills: [],
    categories: [],
    message: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null
}


export const getAllSkills = createAsyncThunk(
    "portfolio/fetchAllSkills",
    async ({ page, limit }: { page: number; limit: number }, { rejectWithValue }) => {
        try {
            const response = await skillsService.getAllSkills(page, limit);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAllCategories = createAsyncThunk(
    "portfolio/fetchAllCategories",
    async (_, { rejectWithValue }) => {
        try {
            const response = await skillsService.getAllCategories();
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);




const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
        addSkill: (state, action: { payload: string }) => {
            if (!state.selectedSkills.includes(action.payload)) {
                state.selectedSkills.push(action.payload);
            }
        },
        removeSkill: (state, action: { payload: string }) => {
            state.selectedSkills = state.selectedSkills.filter(skill => skill !== action.payload);
        },
        setSelectedSkills: (state, action: { payload: string[] }) => {
            state.selectedSkills = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Add these to your extraReducers
            .addCase(getAllSkills.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllSkills.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.allSkills = action.payload.skills || [];
                state.message = action.payload.message;
                console.log("Skills updated in Redux:", state.allSkills); // Debug log
            })
            .addCase(getAllSkills.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload as string;
                state.message = action.payload as string;
                toast.error(action.payload as string);
            })
            .addCase(getAllCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.categories = action.payload.categories;
                state.message = action.payload.message;
            })
            .addCase(getAllCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload as string;
                state.message = action.payload as string;
                toast.error(action.payload as string);
            })
          
    }
})

export const { reset, addSkill, removeSkill, setSelectedSkills } =skillsSlice.actions;
export default skillsSlice.reducer;