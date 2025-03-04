import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const postUser = async (AccessToken) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/user`,{token:AccessToken},{headers:{Authorization:AccessToken}});
        return res.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export const logout = async (AccessToken)=>{
    try{
        const res = await axios.post(`${API_BASE_URL}/logout`,{headers:{Authorization:AccessToken}});
        return res.status;
    }
    catch(err){
        console.error(err);
        return [];
    }
}