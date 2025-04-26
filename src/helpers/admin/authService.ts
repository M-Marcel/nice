import axios, { AxiosError } from "axios";
import { User } from "../../dataTypes";


// const getApiConfig = () => {
//     const env = process.env.REACT_APP_ENV || 'development';

//     const apiConfig = {
//         development: {
//             baseUrl: "https://apijhnvuokjgsbgyerbfgdev.lanepact.com",
//         },
//         staging: {
//             baseUrl: "https://apidhykngtwistaging.lanepact.com",
//         },
//         production: {
//             baseUrl: "https://coreapi.lanepact.com",
//         }
//     };

//     return apiConfig[env as keyof typeof apiConfig];
// };

// const { baseUrl } = getApiConfig();

// const API_URL = `${baseUrl}/api/v1/auth/admin`

const baseUrl = process.env.REACT_APP_BASEURL

const API_URL = `${baseUrl}/api/v1/auth/admin`

interface ApiErrorResponse {
    message: string;
}

// Helper to get auth headers
// const getAuthHeaders = (): Record<string, string> => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         throw new Error("Authentication token is missing. Please log in again.");
//     }
//     return {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//     };
// };


// handle API errors
const handleApiError = (error: AxiosError): never => {
    const errorMessage = (error.response?.data as ApiErrorResponse)?.message ||
        "An unexpected error occurred. Please try again.";
    throw new Error(errorMessage);
};

// save user data to localStorage
const saveUserToLocalStorage = (data: any) => {
    localStorage.setItem("user", JSON.stringify(data));
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

const AdminAuthService = {
    login
}

export default AdminAuthService;