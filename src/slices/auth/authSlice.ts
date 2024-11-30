import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignUpFormData, User } from "../../dataTypes";
import authService from "../../helpers/authService";

type InitialState = {
    user: User | null
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: string
}

const storedRegisterUser = localStorage.getItem('user');
const user = storedRegisterUser ? JSON.parse(storedRegisterUser) : null;

const initialState: InitialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const register = createAsyncThunk<{ user: User; message: string },SignUpFormData,{ rejectValue: string }>('auth/register', async(userData, thunkApi) => {
    try {
        const response = await authService.register(userData); // Ensure `authService.register` returns a `User`.
        return response;
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'Registration failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
    }
})
export const verifyEmail = createAsyncThunk(
    'auth/verifyEmail',
    async (token: string, thunkApi) => {
      try {
        const response = await authService.verifyEmail(token)
        return response
      } catch (error: any) {
        return thunkApi.rejectWithValue(error.response?.data?.message || 'Verification failed')
      }
    }
  )

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload.user
                state.message = action.payload.message; 
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
                state.user = null
            })
            .addCase(verifyEmail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = 'Account verified successfully'
            })
            .addCase(verifyEmail.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
            })
    }

})

export const { reset } = authSlice.actions
export default authSlice.reducer