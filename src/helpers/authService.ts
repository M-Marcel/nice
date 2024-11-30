import axios from "axios";
import { User } from "../dataTypes";

const API_URL = "https://zroleak-core-service-bbf444d92e4f.herokuapp.com/api/v1/auth/signup"


const register = async(userData:{firstName:string; lastName:string; email:string}):Promise<{ user: User; message: string }> => {
    const response = await axios.post(API_URL, userData, {
         headers:{
            'Content-Type': 'application/json',
         },
         withCredentials: true,
    })

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data);
        return {
            user: response.data,
            message: response.data.message, 
        };
    }
    throw new Error('Registration failed')
}

const verifyEmail = async(token: string) => {
    const response =  await axios.get(`${API_URL}/confirm`, { 
        params: { token }
    });
    return response.data
  }
  
const authService = {
    register,
    verifyEmail
}

export default authService