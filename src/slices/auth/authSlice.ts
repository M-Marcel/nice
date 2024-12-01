import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ForgotFormData, LoginFormData, ResetPasswordFormData, SignUpFormData, User, ValidateFormData } from "../../dataTypes";
import authService from "../../helpers/authService";

type InitialState = {
    user: User | null
    isError: boolean
    isSuccess: boolean
    isForgotPasswordSuccess:boolean
    isLoginSuccess:boolean
    isValidationSuccess:boolean
    isResetPasswordSuccess:boolean
    isLoading: boolean
    message: string
}

const storedRegisterUser = localStorage.getItem('user');
const user = storedRegisterUser ? JSON.parse(storedRegisterUser) : null;

const initialState: InitialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isForgotPasswordSuccess:false,
    isLoginSuccess:false,
    isValidationSuccess:false,
    isResetPasswordSuccess:false,
    isLoading: false,
    message: ""
}

export const register = createAsyncThunk<{ user: User; message: string }, SignUpFormData, { rejectValue: string }>('auth/register', async (userData, thunkApi) => {
    try {
        const response = await authService.register(userData);
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

export const login = createAsyncThunk<{ user: User; message: string }, LoginFormData, { rejectValue: string }>('auth/login', async (userData, thunkApi) => {
    try {
        const response = await authService.login(userData)
        return response
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'login failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
    }
}
)

export const forgotPassword = createAsyncThunk<{user:User; message:string}, ForgotFormData, { rejectValue: string }>('auth/forgot-password', async (userData, thunkApi) => {
        try{
            const response = await authService.forgotPassword(userData)
            return response
        }catch(error:any){
            const message = error.response?.data?.message || error.message || 'failed';
            console.log(message)
            return thunkApi.rejectWithValue(message)
        }
    }
)

export const validateOtp = createAsyncThunk<{user:User; message:string}, ValidateFormData, { rejectValue: string }>('auth/validate-otp', async (userData, thunkApi) => {
    try{
        const response = await authService.validateOtp(userData)
        return response
    }catch(error:any){
        const message = error.response?.data?.message || error.message || 'OTP validation failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
    }
}

)
export const resetPassword = createAsyncThunk<{user:User; message:string}, ResetPasswordFormData, { rejectValue: string }>('auth/reset-password', async (userData, thunkApi) => {
    try{
        const response = await authService.resetPassword(userData)
        return response
    }catch(error:any){
        const message = error.response?.data?.message || error.message || 'Password Reset failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
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
            state.isForgotPasswordSuccess = false
            state.isLoginSuccess = false
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
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isLoginSuccess = true
                state.user = action.payload.user
                state.message = 'Logged in successfully'
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
                state.user = null
            })
            .addCase(forgotPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isForgotPasswordSuccess = true
                state.user = action.payload.user
                state.message = 'An OTP has been sent to yor email'
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.message = action.payload as string
            })
            .addCase(validateOtp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(validateOtp.fulfilled, (state, action) => {
                state.isLoading = false
                state.isValidationSuccess = true
                state.user = action.payload.user
                state.message = 'OTP validated successfully'
            })
            .addCase(validateOtp.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.message = action.payload as string
            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isResetPasswordSuccess = true
                state.user = action.payload.user
                state.message = 'Password reset successful'
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.message = action.payload as string
            })
    }

})

export const { reset } = authSlice.actions
export default authSlice.reducer