import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    AuthResponse,
    CompleteSignUpFormData,
    ForgotFormData,
    LoginFormData,
    ResetPasswordFormData,
    SignUpFormData,
    UpdateProfileFormData,
    User,
    ValidateFormData,
} from "../../dataTypes";
import authService from "../../helpers/authService";
import { toast } from "react-toastify";

type InitialState = {
    user: User | null;
    isError: boolean;
    token: string | null;
    isSuccess: boolean;
    isCompleteSignUpSuccess: boolean;
    isForgotPasswordSuccess: boolean;
    isLoginSuccess: boolean;
    isValidationSuccess: boolean;
    isFetchProfileSuccess: boolean
    isResetPasswordSuccess: boolean;
    isUpdateProfileSuccess: boolean;
    isLoading: boolean;
    message: string;
};
const getSafeLocalStorageUser = () => {
    try {
        const storedRegisterUser = localStorage.getItem("user");
        return storedRegisterUser ? JSON.parse(storedRegisterUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem("user");
      return null;
    }
  };
  const user = getSafeLocalStorageUser();
// const storedRegisterUser = localStorage.getItem("user");
// const user = storedRegisterUser ? JSON.parse(storedRegisterUser) : null;
const storedToken = localStorage.getItem("token");

const initialState: InitialState = {
    user: user || null,
    token: storedToken,
    isError: false,
    isSuccess: false,
    isCompleteSignUpSuccess: false,
    isForgotPasswordSuccess: false,
    isLoginSuccess: false,
    isValidationSuccess: false,
    isResetPasswordSuccess: false,
    isFetchProfileSuccess: false,
    isUpdateProfileSuccess: false,
    isLoading: false,
    message: "",
};

// Updated thunk return types based on actual API responses
export const register = createAsyncThunk<
    { user: User; message: string },
    SignUpFormData,
    { rejectValue: string }
>("auth/register", async (userData, thunkApi) => {
    try {
        const response = await authService.register(userData);
        return response;
    } catch (error: any) {
        const message =
            error.response?.data?.message || error.message || "Registration failed";
        return thunkApi.rejectWithValue(message);
    }
});

export const verifyEmail = createAsyncThunk<
    { data:{firstName:string, lastName:string, email: string, provider:string}, message:string, success:boolean},
    string,
    { rejectValue: string }
>("auth/verifyEmail", async (token, thunkApi) => {
    try {
        const response = await authService.verifyEmail(token);
        return response;
    } catch (error: any) {
        const errorMessage =
            error.response?.data?.message || "Verification failed. Please try again.";
        return thunkApi.rejectWithValue(errorMessage);
    }
});

export const verifyUser = createAsyncThunk(
    'auth/verifyUser',
    async (token: string, { rejectWithValue }) => {
        try {
            localStorage.setItem("token", token);
            const response = await authService.getProfile();

            console.log("v-user response", response);
            
            // Handle the nested data structure
            const userData = (response as any).data || response;
            
            localStorage.setItem("user", JSON.stringify(userData));
        
            return {
                user: userData, 
                message: response.message || "No message", 
                token: token,
            };
        } catch (error: any) {
            return rejectWithValue("Verification failed");
        }
    }
);
export const login = createAsyncThunk<
    { user: User; token: string; message: string }, // What the reducer will receive
    LoginFormData,
    { rejectValue: string }
>("auth/login", async (userData, thunkApi) => {
    try {
        // Type the response as AuthResponse
        const response = await authService.login(userData) as AuthResponse;
        
        // Extract the nested data
        return {
            user: response.data.user,
            token: response.data.token,
            message: response.message
        };
    } catch (error: any) {
        const message =
            error.response?.data?.message || error.message || "Login failed";
        return thunkApi.rejectWithValue(message);
    }
});

export const forgotPassword = createAsyncThunk<
    { message: string },
    ForgotFormData,
    { rejectValue: string }
>("auth/forgot-password", async (userData, thunkApi) => {
    try {
        const response = await authService.forgotPassword(userData);
        return response;
    } catch (error: any) {
        const message =
            error.response?.data?.message || error.message || "Failed to send reset email";
        return thunkApi.rejectWithValue(message);
    }
});

export const validateOtp = createAsyncThunk<
    { user: User; message: string },
    ValidateFormData,
    { rejectValue: string }
>("auth/validate-otp", async (userData, thunkApi) => {
    try {
        const response = await authService.validateOtp(userData);
        return response;
    } catch (error: any) {
        const message =
            error.response?.data?.message || error.message || "OTP validation failed";
        return thunkApi.rejectWithValue(message);
    }
});

export const resetPassword = createAsyncThunk<
    { message: string },
    ResetPasswordFormData,
    { rejectValue: string }
>("auth/reset-password", async (userData, thunkApi) => {
    try {
        const response = await authService.resetPassword(userData);
        return response;
    } catch (error: any) {
        const message =
            error.response?.data?.message || error.message || "Password reset failed";
        return thunkApi.rejectWithValue(message);
    }
});

export const completeSignUp = createAsyncThunk<
    { user: User; message: string },
    CompleteSignUpFormData,
    { rejectValue: string }
>("auth/complete-signup", async (userData, thunkApi) => {
    try {
        const response = await authService.completeSignUp(userData);
        return response;
    } catch (error: any) {
        const message =
            error.response?.data?.message || error.message || "Signup completion failed";
        return thunkApi.rejectWithValue(message);
    }
});

export const getProfile = createAsyncThunk<
    { user: User; message: string },
    void,
    { rejectValue: string }
>("auth/getProfile", async (_, thunkApi) => {
    try {
        const response = await authService.getProfile();
        return response;
    } catch (error: any) {
        const message =
            error.response?.data?.message || error.message || "Failed to fetch profile";
        return thunkApi.rejectWithValue(message);
    }
});

export const updateProfile = createAsyncThunk<
    { user: User | null; message: string },
    UpdateProfileFormData,
    { rejectValue: string }
>("auth/updateProfile", async (userData, thunkApi) => {
    try {
        const response = await authService.updateProfile(userData);
        return response;
    } catch (error: any) {
        const message =
            error.response?.data?.message || error.message || "Profile update failed";
        return thunkApi.rejectWithValue(message);
    }
});

// Logout thunk doesn't return anything
export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logoutUser();
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoginSuccess = false;
            state.isError = true; // Set isError to true for token expiration
            state.message = "Session expired, please login";
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isCompleteSignUpSuccess = false
            state.isForgotPasswordSuccess = false
            state.isLoginSuccess = false
            state.isFetchProfileSuccess = false
            state.isUpdateProfileSuccess = false
            state.isError = false
            state.message = ''
        },
        userRestored: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Register Reducers
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                toast.error(action.payload)
            })
            // Verify Email reducers
            .addCase(verifyEmail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(verifyEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
            })
            .addCase(verifyUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(verifyUser.fulfilled, (state,  action: PayloadAction<any>) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload.user;
                console.log("user", state.user)
                state.token = action.payload.token;
                state.message = action.payload.message;
                localStorage.setItem("user", JSON.stringify(action.payload.user));  // Save user to localStorage
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(verifyUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.message = action.payload as string;
            })

            // Login reducers
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoginSuccess = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.message = action.payload.message;
                // toast.success('log in successful');

            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.user = null;
                toast.error(action.payload);
            })
            
            // Forgot Password reducers
            .addCase(forgotPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isForgotPasswordSuccess = true;
                state.message = action.payload.message;
                toast.success('an OTP has been sent to your mail');
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                toast.error(action.payload);
            })

            // Validate OTP reducers
            .addCase(validateOtp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(validateOtp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isValidationSuccess = true;
                state.user = action.payload.user
                state.message = action.payload.message;
                toast.success("Validation successful");
            })
            .addCase(validateOtp.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null
                state.message = action.payload as string;
                toast.error(action.payload)
            })

            // Reset Password reducers
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isResetPasswordSuccess = true;
                state.message = action.payload.message;
                toast.success("Password reset successful");
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                toast.error(action.payload);
            })

            // Complete Signup reducers
            .addCase(completeSignUp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(completeSignUp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isCompleteSignUpSuccess = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase(completeSignUp.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                toast.error(action.payload);
            })

            // Get Profile reducers
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isFetchProfileSuccess = true;
                state.user = action.payload.user;
               
                state.message = action.payload.message;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.message = action.payload as string;
                toast.error(action.payload);
            })

            // Update Profile reducers
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isUpdateProfileSuccess = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                toast.error(action.payload as string);
            })

            // Logout reducers
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.token = null;
                state.isLoginSuccess = false;
                state.isError = false;
                state.message = '';
               
            });
    },
});

export const { reset, setToken, userRestored } = authSlice.actions;
export default authSlice.reducer;
