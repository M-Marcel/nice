import axios, { AxiosError } from "axios";
import { Category, Skill } from "../dataTypes";

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

const API_URL = `${baseUrl}/api/v1/portfolio-builder/portfolio`;

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

// Handle API errors
const handleApiError = (error: AxiosError): never => {
    const errorMessage = (error.response?.data as ApiErrorResponse)?.message ||
        "An unexpected error occurred. Please try again.";
    throw new Error(errorMessage);
};

// Fetch a template by ID


const getAllSkills = async (page: number = 1, limit: number = 10): Promise<{ skills: Skill[]; message: string }> => {
    try {
        const response = await axios.get(`${API_URL}/skills?page=${page}&limit=${limit}`, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });
        console.log("Skills API Response:", response.data);

        const skillsData = response.data?.data.data || [];
        console.log("Extracted skills:", skillsData);

        return {
            skills: skillsData,
            message: "Skills fetched successfully",
        };
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Failed to fetch skills");
    }
};

const getAllCategories = async (): Promise<{ categories: Category[]; message: string }> => {
    try {
        const response = await axios.get(`${API_URL}/categories`, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });

        console.log('Categories Response', response)
        const categoriesData = response.data?.data || [];
        return {
            categories: categoriesData,
            message: "Categories fetched successfully",
        };
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Failed to fetch categories");
    }
};


const skillsService = {

    getAllSkills,
    getAllCategories,

};

export default skillsService;