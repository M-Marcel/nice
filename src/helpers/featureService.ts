import axios from "axios";
import { Feature } from "../dataTypes";

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

const API_URL = `${baseUrl}/api/v1/feature`


const createFeatureRequest = async (featureData: { title: string; tag: string; description: string }): Promise<{ feature: Feature; message: string }> => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("User is not authenticated");
    }
    const response = await axios.post(`${API_URL}`, featureData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        withCredentials: true,
    })

    if (response.data) {
        // Get the current features from localStorage
        const currentFeatures = JSON.parse(localStorage.getItem("features") || "[]");

        // Add the new feature at the start of the list
        const updatedFeatures = [response.data.data, ...currentFeatures];

        // Save updated features to localStorage
        localStorage.setItem("features", JSON.stringify(updatedFeatures));

        console.log("Response from createFeatureRequest API:", response.data.data);

        return {
            feature: response.data.data,
            message: response.data.message,
        };
    }
    throw new Error('feature creation failed')
}

const getAllFeatureRequest = async (
    page: number = 1,
    pageSize: number = 5
): Promise<{
    features: Feature[];
    pagination: {
        total: number;
        currentPage: number;
        totalPages: number;
        pageSize: number;
    };
    message: string;
}> => {
    const response = await axios.get(`${API_URL}?page=${page}&pageSize=${pageSize}`);

    if (response?.data?.success) {
        return {
            features: response.data.data.data || [], // Access nested data array
            pagination: response.data.data.pagination || { // Access nested pagination
                total: 0,
                currentPage: page,
                totalPages: 1,
                pageSize
            },
            message: response.data.message || "Features fetched successfully"
        };
    }
    throw new Error(response?.data?.message || "Failed to fetch features");
};

const voteFeatureRequest = async (id: string): Promise<{ feature: Feature; message: string }> => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("You must login to vote");
    }
    const response = await axios.patch(`${API_URL}/like/${id}`, {}, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        withCredentials: true,
    })

    if (response.data) {
        localStorage.setItem('featureData', JSON.stringify(response.data))
        return {
            feature: response.data,
            message: response.data.message,
        };
    }
    throw new Error('vote feature request failed')
}

const featureService = {
    createFeatureRequest,
    getAllFeatureRequest,
    voteFeatureRequest,


}

export default featureService