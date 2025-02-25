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