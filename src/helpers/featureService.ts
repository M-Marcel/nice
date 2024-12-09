import axios from "axios";
import { Feature } from "../dataTypes";

const API_URL = "https://zroleak-core-service-bbf444d92e4f.herokuapp.com/api/v1/feature"

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
        localStorage.setItem('featureData', JSON.stringify(response.data))
        console.log(response.data);
        return {
            feature: response.data,
            message: response.data.message,
        };
    }
    throw new Error('feature creation failed')
}

const featureService = {
    createFeatureRequest
}

export default featureService