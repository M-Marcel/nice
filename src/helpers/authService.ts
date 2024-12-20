import axios, { AxiosError } from "axios";
import { User } from "../dataTypes";

// const API_URL = "https://zroleak-core-service-bbf444d92e4f.herokuapp.com/api/v1/auth";
// const VERIFY_API_URL = `${API_URL}/signup/confirm`;
// const GET_USER_PROFILE = "https://zroleak-core-service-bbf444d92e4f.herokuapp.com/api/v1/users/profile/me";

const API_URL = `${process.env.REACT_APP_BASEURL}/api/v1/auth`
const VERIFY_API_URL = `${process.env.REACT_APP_BASEURL}/api/v1/auth/signup/confirm`
const GET_USER_PROFILE = `${process.env.REACT_APP_BASEURL}/api/v1/users/profile/me`

interface ApiErrorResponse {
    message: string;
}

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
// handle API errors
const handleApiError = (error: AxiosError): never => {
    const errorMessage = (error.response?.data as ApiErrorResponse)?.message ||
        "An unexpected error occurred. Please try again.";
    throw new Error(errorMessage);
};

// Helper to save user data to localStorage
const saveUserToLocalStorage = (data: any) => {
    localStorage.setItem("user", JSON.stringify(data));
};

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
const verifyEmail = async (token: string): Promise<{ email: string; message: string }> => {
    try {
        const response = await axios.get(VERIFY_API_URL, {
            params: { token },
        });
        return response.data;
    } catch (error: any) {
        handleApiError(error);
        throw new Error("verification failed");
    }
};

// Login user
const login = async (userData: { email: string; password: string }): Promise<{ user: User; token: string; message: string }> => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });

        const { user, token, message } = response.data;
        localStorage.setItem("token", token);
        saveUserToLocalStorage(user);
        return { user, token, message };
    } catch (error: any) {
        handleApiError(error);
        throw new Error("login failed");
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
        throw new Error("failed");
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
        throw new Error("password reset failed");
    }
};

// Complete signup
const completeSignUp = async (userData: {
    email: string;
    password: string;
    userWorkRole: string;
    userCompanySize: string;
    userUseForZroleak: string[];
    userTechnicalExperience: string;
}): Promise<{ user: User; message: string }> => {
    try {
        const response = await axios.post(`${API_URL}/signup/complete`, userData, {
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
        throw new Error("registration failed");
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
        throw new Error("failed fetching profile");
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
        // Return updated user data along with a success flag
        return {
            user: response.data,
            message: "Profile updated successfully",
            success: true,
        };
    } catch (error: any) {
        handleApiError(error);
        // Return error information
        return {
            user: null,
            message: "Failed updating profile",
            success: false,
        };
    }
};


// Logout user
const logout = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

const authService = {
    register,
    verifyEmail,
    login,
    forgotPassword,
    validateOtp,
    resetPassword,
    completeSignUp,
    getProfile,
    updateProfile,
    logout,
};

export default authService;
