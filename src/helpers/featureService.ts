import axios from "axios";
import { Feature } from "../dataTypes";

const API_URL = `${process.env.REACT_APP_BASEURL}/api/v1/feature`


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



const getAllFeatureRequest = async (): Promise<{
    features: Feature[];
    message: string;
}> => {

    // First, try to get features from localStorage
    const storedFeatures = localStorage.getItem("features");

    if (storedFeatures) {
        // If features exist in localStorage, return them
        const features = JSON.parse(storedFeatures);
        return {
            features,
            message: "Features fetched from localStorage",
        };
    }

    const response = await axios.get(`${API_URL}`, {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    });

    if (response?.data) {
        // Save the fetched features into localStorage for future use
        localStorage.setItem("features", JSON.stringify(response.data.data));
        console.log("Features fetched from backend:", response.data.data);
        return {
            features: response.data.data,
            message: response.data.message,
        };
    }
    throw new Error("Fetching features failed");
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
        console.log(response.data);
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