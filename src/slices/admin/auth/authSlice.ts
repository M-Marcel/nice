import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    LoginFormData,
    User,
} from "../../../dataTypes";
import authService from "../../../helpers/admin/authService";


type InitialState = {
    user: User | null;
    isError: boolean;
    token: string | null;
    isAdminLoginSuccess: boolean;
    isLoading: boolean;
    message: string;
};

const storedRegisterUser = localStorage.getItem("user");
const user = storedRegisterUser ? JSON.parse(storedRegisterUser) : null;
const storedToken = localStorage.getItem("token");

const initialState: InitialState = {
    user: user || null,
    token: storedToken,
    isError: false,
    isAdminLoginSuccess: false,
    isLoading: false,
    message: "",
};

// Updated thunk return types based on actual API responses
export const login = createAsyncThunk<
    { user: User; token: string; message: string },
    LoginFormData,
    { rejectValue: string }
>("auth/login", async (userData, thunkApi) => {
    try {
        const response = await authService.login(userData);
        return response;
    } catch (error: any) {
        const message =
            error.response?.data?.message || error.message || "Login failed";
        return thunkApi.rejectWithValue(message);
    }
});

const authSlice = createSlice({
    name: "adminauth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
        reset: (state) => {
            state.isLoading = false
            state.isAdminLoginSuccess = false
            state.isError = false
            state.message = ''
        },
        userRestored: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Login reducers
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAdminLoginSuccess = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.message = action.payload.message;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.user = null;
            })
    },
});

export const { reset, setToken, userRestored } = authSlice.actions;
export default authSlice.reducer;
