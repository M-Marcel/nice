import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { AuthResponse, User } from "../dataTypes";
import { toast } from "react-toastify";
import store  from "../app/store"; // Import your Redux store
import { logout } from "../slices/auth/authSlice"; // Import the logout action

// const getApiConfig = () => {
    // const env = process.env.REACT_APP_ENV || 'development';
    
//     const apiConfig = {
//       development: {
//         baseUrl: "https://apijhnvuokjgsbgyerbfgdev.lanepact.com",
//       },
//       staging: {
//         baseUrl: "https://apidhykngtwistaging.lanepact.com",
//       },
//       production: {
//         baseUrl: "https://coreapi.lanepact.com",
//       }
//     };
  
//     return apiConfig[env as keyof typeof apiConfig];
//   };

//   const { baseUrl } = getApiConfig();

const baseUrl = process.env.REACT_APP_BASEURL
const API_URL = `${baseUrl}/api/v1/auth`;
const VERIFY_API_URL = `${baseUrl}/api/v1/auth/signup/confirm`;
const GET_USER_PROFILE = `${baseUrl}/api/v1/users/profile/me`;

interface ApiErrorResponse {
    message: string;
}
// interface ApiResponse {
//     user: {
//       data: User; // This matches your actual response structure
//       message: string;
//       success: boolean;
//     };
//     message: string;
//     token: string;
//   }
// Helper to get auth headers
const getAuthHeaders = (): Record<string, string> => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Authentication token is missing. Please log in again.");
    }
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
};

// Handle API errors
const handleApiError = (error: AxiosError): never => {
    const errorMessage = (error.response?.data as ApiErrorResponse)?.message ||
        "An unexpected error occurred. Please try again.";
    throw new Error(errorMessage);
};

// save user data to localStorage
const saveUserToLocalStorage = (data: any) => {
    localStorage.setItem("user", JSON.stringify(data));
};

// Axios request interceptor to add the auth token to requests
axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Axios response interceptor to handle token expiration
axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            toast.error("Session expired. Please log in again.");
            store.dispatch(logout()); // Dispatch logout action
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/"; // Redirect to login page
        }
        return Promise.reject(error);
    }
);

// Register user
const register = async (userData: { firstName: string; lastName: string; email: string }): Promise<{ user: User; message: string }> => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });

        saveUserToLocalStorage(response.data);
        return {
            user: response.data,
            message: response.data.message,
        };
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Registration failed");
    }
};

// Verify email
const verifyEmail = async (token: string): Promise<{ data:{firstName:string, lastName:string, provider:string, email:string}; message: string; success:boolean }> => {
    try {
        const response = await axios.get(VERIFY_API_URL, {
            params: { token },
        });
      
        console.log("Confirm resp", response.data);
        return response.data;
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Verification failed");
    }
};

// Verify user
const verifyUser = async (token: string): Promise<{ user: User; message: string; token: string }> => {
    localStorage.setItem("token", token);
    try {
        const response = await getProfile();
        console.log("User AuthService Response", response);

        // Handle both possible response structures (nested or flat)
        const userData = (response as any).data || response;
        const message = response.message || "User verified successfully";

        localStorage.setItem("token", token);
        saveUserToLocalStorage(userData);

        return {
            user: userData,
            message: message,
            token: token,
        };
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Verification failed");
    }
}

// Login user
const login = async (userData: { email: string; password: string }): Promise<AuthResponse> => {
    try {
        const response = await axios.post<AuthResponse>(`${API_URL}/login`, userData, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
        console.log("login response", response)

        // eslint-disable-next-line
        const { data: { user, token }, message } = response.data;
        
        localStorage.setItem("token", token);
        saveUserToLocalStorage(user);
        return response.data;
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Login failed");
    }
};

// Forgot password
const forgotPassword = async (userData: { email: string }): Promise<{ message: string }> => {
    try {
        const response = await axios.post(`${API_URL}/forgot-password`, userData, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });

        return response.data;
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Failed to send reset email");
    }
};

// Validate OTP
const validateOtp = async (userData: { email: string; otp: string }): Promise<{ user: User; message: string }> => {
    try {
        const response = await axios.post(`${API_URL}/validate-otp`, userData, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
        saveUserToLocalStorage(response.data);
        console.log(response.data);
        return {
            user: response.data,
            message: response.data.message,
        };
    } catch (error: any) {
        handleApiError(error);
        throw new Error("OTP validation failed");
    }
};

// Reset password
const resetPassword = async (userData: { email: string; newPassword: string }): Promise<{ message: string }> => {
    try {
        const response = await axios.patch(`${API_URL}/reset-password`, userData, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });

        return response.data;
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Password reset failed");
    }
};

// Complete signup
const completeSignUp = async (userData: {
    email: string;
    gender: string;
    password?: string;
    userWorkRole: string;
    userCompanySize: string;
    userUseForZroleak: string[];
    userTechnicalExperience: string;
}): Promise<{ user: User; token:string; message: string }> => {
    try {
        const response = await axios.post(`${API_URL}/signup/complete`, userData, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
        console.log('comp response', response)
        localStorage.setItem("token", response.data.data.token);
        saveUserToLocalStorage(response.data.data.user);
        return {
            user: response.data.data.user,
            token:response.data.data.token,
            message: response.data.message,
        };
    } catch (error: any) {
       
        handleApiError(error);
        throw new Error("Registration failed");
    }
};

// Get user profile
const getProfile = async (): Promise<{ user: User; message: string }> => {
    try {
        const response = await axios.get(GET_USER_PROFILE, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });

        return response.data;
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Failed fetching profile");
    }
};

// Update user profile
const updateProfile = async (userData: {
    firstName: string;
    lastName: string;
    userTechnicalExperience: string;
    userWorkRole: string;
}): Promise<{ user: User | null; message: string, success: boolean }> => {
    try {
        const response = await axios.patch(GET_USER_PROFILE, userData, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });
        saveUserToLocalStorage(response.data);
        return {
            user: response.data,
            message: "Profile updated successfully",
            success: true,
        };
    } catch (error: any) {
        handleApiError(error);
        return {
            user: null,
            message: "Failed updating profile",
            success: false,
        };
    }
};

// Logout user
const logoutUser = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  
};

const authService = {
    register,
    verifyEmail,
    verifyUser,
    login,
    forgotPassword,
    validateOtp,
    resetPassword,
    completeSignUp,
    getProfile,
    updateProfile,
    logoutUser,
};

export default authService;