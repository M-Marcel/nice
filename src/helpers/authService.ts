import axios from "axios";
import { User } from "../dataTypes";

const API_URL = "https://zroleak-core-service-bbf444d92e4f.herokuapp.com/api/v1/auth"
const VERIFY_API_URL = "https://lanepact.vercel.app/verifyEmail?token="


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



const login = async (userData: { email: string; password: string }): Promise<{ user: User; message: string }> => {
    const response = await axios.post(`${API_URL}/login`, userData, {
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
    throw new Error('login failed');

}

const forgotPassword = async (userData: { email:string }): Promise<{ user: User; message: string }> => {
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

const validateOtp = async(userData: { email:string; otp:string }): Promise<{ user: User; message: string }> => {
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

const resetPassword = async(userData: { email:string; newPassword:string }): Promise<{ user: User; message: string }> => {
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

const authService = {
    register,
    verifyEmail,
    login,
    forgotPassword,
    validateOtp,
    resetPassword
}

export default authService