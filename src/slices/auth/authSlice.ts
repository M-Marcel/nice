import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CompleteSignUpFormData, ForgotFormData, LoginFormData, ResetPasswordFormData, SignUpFormData, User, ValidateFormData } from "../../dataTypes";
import authService from "../../helpers/authService";
import { toast } from "react-toastify";

type InitialState = {
    user: User | null
    isError: boolean
    token: string | null
    isSuccess: boolean
    isCompleteSignUpSuccess: boolean
    isForgotPasswordSuccess: boolean
    isLoginSuccess: boolean
    isValidationSuccess: boolean
    isResetPasswordSuccess: boolean
    isLoading: boolean
    message: string
}

const storedRegisterUser = localStorage.getItem('user');
const user = storedRegisterUser ? JSON.parse(storedRegisterUser) : null;
const storedToken = localStorage.getItem("token");

const initialState: InitialState = {
    user: user ? user : null,
    token: storedToken,
    isError: false,
    isSuccess: false,
    isCompleteSignUpSuccess: false,
    isForgotPasswordSuccess: false,
    isLoginSuccess: false,
    isValidationSuccess: false,
    isResetPasswordSuccess: false,
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
            const response = await authService.verifyEmail(token);
            return response;
        } catch (error: any) {
            console.error('Error in verifyEmail thunk:', error);
            const errorMessage =
                error.response?.data?.message || 'Verification failed. Please try again.';
            return thunkApi.rejectWithValue(errorMessage);
        }
    }
);

export const login = createAsyncThunk<{ user: User; token: string; message: string }, LoginFormData, { rejectValue: string }>('auth/login', async (userData, thunkApi) => {
    try {
        const response = await authService.login(userData)
        return { user: response.user, token: response.token, message: response.message }; // Add token here
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'login failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
    }
}
)

export const forgotPassword = createAsyncThunk<{ user: User; message: string }, ForgotFormData, { rejectValue: string }>('auth/forgot-password', async (userData, thunkApi) => {
    try {
        const response = await authService.forgotPassword(userData)
        return response
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
    }
}
)

export const validateOtp = createAsyncThunk<{ user: User; message: string }, ValidateFormData, { rejectValue: string }>('auth/validate-otp', async (userData, thunkApi) => {
    try {
        const response = await authService.validateOtp(userData)
        return response
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'OTP validation failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
    }
}

)
export const resetPassword = createAsyncThunk<{ user: User; message: string }, ResetPasswordFormData, { rejectValue: string }>('auth/reset-password', async (userData, thunkApi) => {
    try {
        const response = await authService.resetPassword(userData)
        return response
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'Password Reset failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
    }
}
)

export const completeSignUp = createAsyncThunk<{ user: User; message: string }, CompleteSignUpFormData, { rejectValue: string }>('auth/complete-signup', async (userData, thunkApi) => {
    try {
        const response = await authService.completeSignUp(userData)
        return response
    } catch (error: any) {
        const message = error.response?.data?.message || error.message || 'Complete Signup failed';
        console.log(message)
        return thunkApi.rejectWithValue(message)
    }
}

)
export const logout = createAsyncThunk('auth/logout', async () => {
     await authService.logout()
    return;
});


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload; 
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoginSuccess = false;
            state.isError = false;
            state.message = '';
    
          
        },
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isCompleteSignUpSuccess = false
            state.isForgotPasswordSuccess = false
            state.isLoginSuccess = false
            state.isError = false
            state.message = ''
        },
        userRestored: (state, action) => {
            state.user = action.payload;
        },
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
                toast.error(action.payload)
            })
            .addCase(verifyEmail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload.message
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
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.message = action.payload.message

                // Save token to localStorage
                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("user", JSON.stringify(action.payload.user));
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload as string
                // Cast action.payload to string
                const errorMessage = action.payload as string;
                state.message = errorMessage;
                state.user = null;
                toast.error(errorMessage);
            })
            .addCase(forgotPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isForgotPasswordSuccess = true
                state.user = action.payload.user
                state.message = action.payload.message
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.message = action.payload as string
                toast.error(action.payload)
            })
            .addCase(validateOtp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(validateOtp.fulfilled, (state, action) => {
                state.isLoading = false
                state.isValidationSuccess = true
                state.user = action.payload.user
                state.message = action.payload.message
                toast.success('validation successful');
            })
            .addCase(validateOtp.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.message = action.payload as string
                toast.error(action.payload)
            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isResetPasswordSuccess = true
                state.user = action.payload.user
                state.message = action.payload.message
                toast.success('password reset successful');
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.message = action.payload as string
                toast.error(action.payload)
            })
            .addCase(completeSignUp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(completeSignUp.fulfilled, (state, action) => {
                state.isLoading = false
                state.isCompleteSignUpSuccess = true
                state.user = action.payload.user
                state.message = action.payload.message
            })
            .addCase(completeSignUp.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.user = null
                state.message = action.payload as string
                toast.error(action.payload)
            })
    }

})

export const { reset, setToken, userRestored } = authSlice.actions
export default authSlice.reducer