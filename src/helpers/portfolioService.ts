import axios, { AxiosError } from "axios";
import {  Portfolio} from "../dataTypes";

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
        const response = await axios.get(url, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });

        if (response?.data) {
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

const updatePortfolio = async (id: string, portfolioData: { sections: any[] }): Promise<{ portfolio: Portfolio; message: string }> => {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, portfolioData, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });

        return {
            portfolio: response.data.data,
            message: response.data.message,
        };
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Updating portfolio failed");
    }
};

const getAllPortfolios = async (): Promise<{ portfolios: Portfolio[]; message: string }> => {
    try {
        const response = await axios.get(`${API_URL}`, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });
        
        if (response?.data) {
            return {
                portfolios: response.data, // Assuming the backend returns an array of portfolios
                message: "Portfolios fetched successfully",
            };
        } else {
            throw new Error("No data received from the server.");
        }
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Failed to fetch portfolios: " + error.message);
    }
};



const publishPortfolio = async (id: string): Promise<{ message: string; url: string }> => {
    try {
        const response = await axios.get(`${API_URL}/publish/${id}`, {
            headers: getAuthHeaders(),
            withCredentials: true,
        });
        return response.data;
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Publishing portfolio failed");
    }
};

const getPortfolioBySlug = async (slug: string): Promise<{
    portfolio: Portfolio;
    message: string;
}> => {
    try {
        const url = `${API_URL}/view/${slug}`;
        console.log("API URL:", slug); // Debugging line

           const response = await axios.get(url, {
                 headers: {
                     "Content-Type": "application/json",
                 },
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
   getPortfolioById,
   updatePortfolio,
   getAllPortfolios,
   publishPortfolio,
   getPortfolioBySlug
};

export default portfolioService;