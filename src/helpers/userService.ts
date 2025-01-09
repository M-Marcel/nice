import axios, {AxiosError} from "axios"
import { User } from "../dataTypes";

const API_URL = `${process.env.REACT_APP_BASEURL}/api/v1/users/profile/me`

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

const updateUserPassword = async(userData: {currentPassword:string; newPassword:string }) : Promise<{user:User; message:string}> => {
    try{
        const response = await axios.patch(`${API_URL}`, userData, {
            headers: getAuthHeaders(),
            withCredentials: true,
        })
        return {
            user: response.data,
            message: response.data.message,
        };
    }catch(error: any){
        handleApiError(error);
        throw new Error("failed updating password");
    }
}

const userService = {
    updateUserPassword
}

export default userService;

