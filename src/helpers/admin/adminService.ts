import axios, { AxiosError } from "axios";
import { User } from "../../dataTypes";

const getApiConfig = () => {
    const env = process.env.REACT_APP_ENV || 'development';

    const apiConfig = {
        development: {
            baseUrl: "https://apijhnvuokjgsbgyerbfgdev.lanepact.com",
        },
        staging: {
            baseUrl: "https://apidhykngtwistaging.lanepact.com",
        },
        production: {
            baseUrl: "https://coreapi.lanepact.com",
        }
    };

    return apiConfig[env as keyof typeof apiConfig];
};

const { baseUrl } = getApiConfig();


const API_URL = `${baseUrl}/api/v1/auth/admin`

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

// // Helper to save user data to localStorage
// const saveUserToLocalStorage = (data: any) => {
//     localStorage.setItem("user", JSON.stringify(data));
// };


// Login user
const createAdmin = async (userData: { email: string; }): Promise<{ user: User; message: string }> => {

    try {
        const response = await axios.patch(`${API_URL}/create`, userData, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });

        const { user, message } = response.data;
        return { user, message };
    } catch (error: any) {
        handleApiError(error);
        throw new Error("creating Admin failed");
    }
};

const AdminService = {
    createAdmin
}

export default AdminService;