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

const baseUrl = process.env.REACT_APP_BASEURL

const API_URL = `${baseUrl}/api/v1`

interface ApiErrorResponse {
    message: string;
}

//Helper to get auth headers
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
const getAllUsers = async (page: number = 1, pageSize: number = 5): Promise<{
    users: User[];
    pagination: {
        total: number;
        currentPage: number;
        totalPages: number;
        pageSize: number;
    };
    message: string;
}> => {
    const headers = getAuthHeaders()
    try {
        const response = await axios.get(`${API_URL}/users?page=${page}&pageSize=${pageSize}`, {
            headers: headers,
            withCredentials: true,
        });

        if (response?.data) {
            console.log("authService features", response.data.data)
            return {
                users: response.data.data.data,
                pagination: response.data.data.pagination,
                message: response.data.message,
            };
        } else {
            throw new Error("Fetching users failed");
        }
    } catch (error: any) {
        handleApiError(error);
        throw new Error("fetching users failed")
    }
};

const AdminUserService = {
    getAllUsers
}

export default AdminUserService;