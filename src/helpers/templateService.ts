import axios, { AxiosError } from "axios";
import { Template } from "../dataTypes";

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

const API_URL = `${baseUrl}/api/v1/portfolio-builder/templates`;

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

// Fetch all templates with pagination
const getAllTemplates = async (
    page: number = 1,
    pageSize: number = 5
): Promise<{
    templates: Template[];
    pagination: {
        total: number;
        currentPage: number;
        totalPages: number;
        pageSize: number;
    };
    message: string;
}> => {
    try {
        const url = `${API_URL}?page=${page}&pageSize=${pageSize}`;
        const response = await axios.get(url, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });

        console.log("temp resp", response)
        if (response?.data) {
            return {
                templates: response.data.data.data, 
                pagination: response.data.data.pagination,
                message: "Templates fetched successfully", 
            };
        } else {
            throw new Error("No data received from the server.");
        }
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            handleApiError(error);
        } else {
            throw new Error("Failed fetching templates: " + error.message);
        }
        throw new Error("Failed fetching templates");
    }
};


// Fetch a template by ID
const getTemplateById = async (id: string): Promise<{
    template: Template;
    message: string;
}> => {
    try {
        const url = `${API_URL}/${id}`;
        console.log("API URL:", url); // Debugging line

        const response = await axios.get(url, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });

        console.log("API Response:", response); // Debugging line

        if (response?.data) {
            console.log("Template Services - Data:", response.data);
            return {
                template: response.data, // Match the API response structure
                message: "Template fetched successfully", // Custom message
            };
        } else {
            throw new Error("No data received from the server.");
        }
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            handleApiError(error);
        } else {
            throw new Error("Failed fetching template by ID: " + error.message);
        }
        throw new Error("Failed fetching template by ID");
    }
};




const templateService = {
    getAllTemplates,
    getTemplateById
};

export default templateService;