import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { access } from "../../atom/access";


const API_BASE_URL = "http://localhost:3000/board";

// 게시글 목록 가져오기
export const getList = async () => {
    const accessToken=useRecoilValue(access);

    try {
        const res = await axios.get(`${API_BASE_URL}/list`);
        return res.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

// 게시글 추가하기
export const postBoard = async (title, detail) => {
    const accessToken=useRecoilValue(access);
    try {
        const res = await axios.post(`${API_BASE_URL}/add`, { title, detail });
        console.log(`status: ${res.status}, data: ${res.data}`);
        return res.data;
    } catch (err) {
        console.error(err);
    }
};
