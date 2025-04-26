import axios, { AxiosError } from "axios";

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

const API_URL = `${baseUrl}/api/v1/email/contact-us`;

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

// Handle API errors
const handleApiError = (error: AxiosError): never => {
    const errorMessage = (error.response?.data as ApiErrorResponse)?.message ||
        "An unexpected error occurred. Please try again.";
    throw new Error(errorMessage);
};

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    files?: File | null;
}

const sendContactMessage = async (contactData: ContactFormData): Promise<{ message: string }> => {
    try {
        const formData = new FormData();
        formData.append('name', contactData.name);
        formData.append('email', contactData.email);
        formData.append('subject', contactData.subject);
        formData.append('message', contactData.message);
        
        if (contactData.files) {
            formData.append('files', contactData.files);
        }

        const response = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });

        return {
            message: response.data.message || "Message sent successfully",
        };
    } catch (error: any) {
        handleApiError(error);
        throw new Error("Sending message failed");
    }
};

const contactService = {
    sendContactMessage,
};

export default contactService;