import axios, { AxiosError } from "axios";
import { Portfolio } from "../dataTypes";

const API_URL = `${process.env.REACT_APP_BASEURL}/api/v1/portfolio-builder/portfolio`;

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
const createPortfolio = async (portfolioData: {
    referenceTemplate: string;
}): Promise<{ portfolio: Portfolio; message: string }> => {
    try {
        const response = await axios.post(`${API_URL}`, portfolioData, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });

      
        return { 
            portfolio: response.data,
            message: response.data.message,
        };
    } catch (error: any) {
        handleApiError(error);
        throw new Error("creating portfolio failed");
    }
};

const getPortfolioById = async (id: string): Promise<{
    portfolio: Portfolio;
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
                portfolio: response.data, 
                message: "Template fetched successfully",
            };
        } else {
            throw new Error("No data received from the server.");
        }
    } catch (error: any) {
        if(axios.isAxiosError(error)) {
            handleApiError(error);
        } else {
            throw new Error("Failed fetching template by ID: " + error.message);
        }
        throw new Error("Failed fetching template by ID");
    }
};



const portfolioService = {
   createPortfolio,
   getPortfolioById
};

export default portfolioService;