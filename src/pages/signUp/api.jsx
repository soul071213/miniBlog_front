import axios from "axios";

export const signUp = async (id,password) => {
    try {
      const res = await axios.post("http://localhost:3000/signUp", { user_id: id,password:password },{headers:{"Content-Type": "application/json"}});
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const log = async (AccessToken)=>{
    try{
        const res = await axios.post(`${API_BASE_URL}/log`,{headers:{Authorization:AccessToken}});
        return res.status;
    }
    catch(err){
        console.error(err);
        return [];
    }
}