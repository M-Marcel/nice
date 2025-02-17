import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { CreateAdminFormData, User } from "../../../dataTypes";
import AdminUserService from "../../../helpers/admin/userService";
import AdminService from "../../../helpers/admin/adminService";
import { toast } from "react-toastify";


type InitialState = {
    user: User | null
    users: User[]
    displayedUsers: User[],
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
    currentPage: number;
    totalPages: number;
    limit: number;
    total: number;
}

const storedUsers = localStorage.getItem('users');
const users = storedUsers ? JSON.parse(storedUsers) : [];


const storedCreatedUser = localStorage.getItem('user');
const user = storedCreatedUser ? JSON.parse(storedCreatedUser) : null;

const initialState: InitialState = {
    user: user ? user : null,
    users: users,
    displayedUsers: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    currentPage: 1,
    totalPages: 10,
    limit: 5,
    total: 0,
}

export const createAdmin = createAsyncThunk<{ user: User; message: string }, CreateAdminFormData, { rejectValue: string }>('admin/create-admin', async (userData, thunkApi) => {
    try {
        const response = await AdminService.createAdmin(userData)
        return response;
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'Admin creation failed';

        return thunkApi.rejectWithValue(message)
    }
})

export const getAllUsers = createAsyncThunk<
    { users: User[]; pagination: { currentPage: number; totalPages: number; total: number; pageSize: number }; message: string },
    { page: number; pageSize: number },
    { rejectValue: string }
>("users/getAll", async ({ page, pageSize }, thunkApi) => {
    try {
        const response = await AdminUserService.getAllUsers(page, pageSize);
        return { users: response.users, pagination: response.pagination, message: response.message };
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || "Failed to fetch features";
        return thunkApi.rejectWithValue(message);
    }
});



const userSlice = createSlice({
    name: 'adminuser',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
            const startIndex = (state.currentPage - 1) * state.limit;
            const endIndex = startIndex + state.limit;
            state.displayedUsers = state.users.slice(startIndex, endIndex);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAdmin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createAdmin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;

                const newAdmin = action.payload.user;

                // Ensure admins is always an array (fallback to empty array if null)
                if (!state.users) {
                    state.users = [];
                }

                // Add new feature immutably
                state.users = [newAdmin, ...state.users];
                // Reset to the first page

                // Save updated features to localStorage
                localStorage.setItem('users', JSON.stringify(state.users));

                state.message = action.payload.message
            })
            .addCase(createAdmin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
                state.user = null
                toast.error(action.payload)
            })
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                // Reset features array if it's the first page
                if (action.payload.pagination.currentPage === 1) {
                    state.users = action.payload.users;
                } else {
                    // Append new features to the existing features array
                    state.users = [...state.users, ...action.payload.users];
                }

                if (state.currentPage !== action.payload.pagination.currentPage) {
                    state.currentPage = action.payload.pagination.currentPage;
                }
                if (state.totalPages !== action.payload.pagination.totalPages) {
                    state.totalPages = action.payload.pagination.totalPages;
                }
                if (state.total !== action.payload.pagination.total) {
                    state.total = action.payload.pagination.total;
                }
                if (state.limit !== action.payload.pagination.pageSize) {
                    state.limit = action.payload.pagination.pageSize;
                }

                const startIndex = (state.currentPage - 1) * state.limit;
                const endIndex = startIndex + state.limit;
                state.displayedUsers = state.users.slice(startIndex, endIndex);

                localStorage.setItem('users', JSON.stringify(state.users));
                state.message = action.payload.message;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
                state.users = []
                state.displayedUsers = []
                // toast.error(action.payload)
            })

    }
})

export const { reset, setPage } = userSlice.actions
export default userSlice.reducer