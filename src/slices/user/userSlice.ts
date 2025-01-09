import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UpdatePasswordFormData, User } from "../../dataTypes"
import userService from "../../helpers/userService";
import { toast } from "react-toastify";

type InitialState = {
    user: User | null;
    isError: boolean;
    token: string | null;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}

const storedRegisterUser = localStorage.getItem("user");
const user = storedRegisterUser ? JSON.parse(storedRegisterUser) : null
const storedToken = localStorage.getItem("token");

const initialState: InitialState = {
    user: user || null,
    isError: false,
    token: storedToken,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const updatePassword = createAsyncThunk<{ user: User; message: string }, UpdatePasswordFormData, { rejectValue: string }>
    ("user/updatePassword", async (userData, thunkApi) => {
        try {
            const response = await userService.updateUserPassword(userData);
            return response;
        } catch (error: any) {
            const message =
                error.response?.data?.message || error.message || "Registration failed";
            return thunkApi.rejectWithValue(message);
        }
    })


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updatePassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                toast.error(action.payload)
            })
    }
})

export const { reset, setToken } = userSlice.actions;
export default userSlice.reducer;