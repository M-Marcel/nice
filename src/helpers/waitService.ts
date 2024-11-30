import axios from "axios";

const API_URL = "https://zroleak-core-service-bbf444d92e4f.herokuapp.com/api/v1/waitlist"


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