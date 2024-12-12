import axios from "axios";
import { User } from "../dataTypes";

const API_URL = "https://zroleak-core-service-bbf444d92e4f.herokuapp.com/api/v1/auth"
const VERIFY_API_URL = "https://zroleak-core-service-bbf444d92e4f.herokuapp.com/api/v1/auth/signup/confirm?token="
const GET_USER_PROFILE = "https://zroleak-core-service-bbf444d92e4f.herokuapp.com/api/v1/users/profile/me"


const register = async (userData: { firstName: string; lastName: string; email: string }): Promise<{ user: User; message: string }> => {
    const response = await axios.post(`${API_URL}/signup`, userData, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data);
        return {
            user: response.data,
            message: response.data.message,
        };
    }
    throw new Error('Registration failed')
}



const verifyEmail = async (token: string) => {
    try {
        const response = await axios.get(VERIFY_API_URL, {
            params: { token },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error during email verification:', error);

        if (error.response && error.response.data?.message) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('An error occurred while verifying your email. Please try again.');
        }
    }
};



const login = async (userData: { email: string; password: string }): Promise<{ user: User; token: string; message: string }> => {
    const response = await axios.post(`${API_URL}/login`, userData, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })
    if (response.data) {
        const { user, token, message } = response.data;
        localStorage.setItem("token", token);
        return { user, token, message };

    }
    throw new Error('login failed');

}

const forgotPassword = async (userData: { email: string }): Promise<{ user: User; message: string }> => {
    const response = await axios.post(`${API_URL}/forgot-password`, userData, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data);
        return {
            user: response.data,
            message: response.data.message,
        };
    }
    throw new Error('failed');

}

const validateOtp = async (userData: { email: string; otp: string }): Promise<{ user: User; message: string }> => {
    const response = await axios.post(`${API_URL}/validate-otp`, userData, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data);
        return {
            user: response.data,
            message: response.data.message,
        };
    }
    throw new Error('failed');
}

const resetPassword = async (userData: { email: string; newPassword: string }): Promise<{ user: User; message: string }> => {
    const response = await axios.patch(`${API_URL}/reset-password`, userData, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data);
        return {
            user: response.data,
            message: response.data.message,
        };
    }
    throw new Error('failed');
}

const completeSignUp = async (userData: {
    email: string;
    password: string;
    userWorkRole: string;
    userCompanySize: string;
    userUseForZroleak: string[];
    userTechnicalExperience: string
}): Promise<{ user: User; message: string }> => {

    const response = await axios.post(`${API_URL}/signup/complete`, userData, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data);
        return {
            user: response.data,
            message: response.data.message,
        };
    }
    throw new Error('failed');

}


const getProfile = async (): Promise<{ user: User; message: string }> => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("Authentication token is missing. Please log in again.");
        }

        const response = await axios.get(GET_USER_PROFILE, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            withCredentials: true,
        });

        if (response.status === 200 && response.data) {
            const { user, message } = response.data;
            console.log("User profile retrieved successfully:", user);
            return { user, message };
        } else {
            throw new Error("Unexpected response from the server. Please try again later.");
        }
    } catch (error: any) {
        console.error("Failed to retrieve user profile:", error);
        if (error.response) {
            const { status, data } = error.response;
            if (status === 401) {
                throw new Error("Unauthorized access. Please log in again.");
            } else if (data?.message) {
                throw new Error(data.message);
            }
        }

        throw new Error("An error occurred while retrieving the profile. Please try again later.");
    }
};


const logout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return;
}

const authService = {
    register,
    verifyEmail,
    login,
    forgotPassword,
    validateOtp,
    resetPassword,
    completeSignUp,
    getProfile,
    logout
}

export default authService