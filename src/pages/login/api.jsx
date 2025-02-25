import axios from "axios";

export const login = async (id,password) => {
    try {
      const res = await axios.post("http://localhost:3000/login", { user_id: id,password:password },{headers:{"Content-Type": "application/json"}});
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };