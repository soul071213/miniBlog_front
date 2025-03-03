import axios from "axios";

export const getDetail = async (id,AccessToken) => {
    try {
      const res = await axios.post("http://localhost:3000/board/detail", { id: id },{headers:{Authorization:AccessToken}});
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

export const getComments = async (id,AccessToken)=>{
    try{
        const res = await axios.post("http://localhost:3000/comment/list",{board_id:id},{headers:{Authorization:AccessToken}});
        console.log(res.data);
        return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }
}

export const postComment = async (id,text,AccessToken)=>{
    try{
        await axios.post("http://localhost:3000/comment/add",{board_id:id,content:text},{headers:{Authorization:AccessToken}});
    }
    catch(err){
        console.log(err);
    }
}