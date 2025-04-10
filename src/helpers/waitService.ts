import axios from "axios";
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

const API_URL = `${baseUrl}/api/v1/waitlist`


const join = async(userData:{fullName:string; email:string}) => {
    const response = await axios.post(API_URL, userData, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })

    if(response.data){
        localStorage.setItem('waitUser', JSON.stringify(response.data))
        return response.data;
    }
    throw new Error('failed to join waitlist');
}

const waitService = {
    join
}

export default waitService