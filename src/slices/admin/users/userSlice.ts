import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { User } from "../../../dataTypes";
import AdminUserService from "../../../helpers/admin/userService";


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
const  users = storedUsers ? JSON.parse(storedUsers) : [];


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
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.users = action.payload.users;
                console.log("features", action.payload.users)

                state.currentPage = action.payload.pagination.currentPage;
                state.totalPages = action.payload.pagination.totalPages;
                state.total = action.payload.pagination.total;
                state.limit = action.payload.pagination.pageSize;
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