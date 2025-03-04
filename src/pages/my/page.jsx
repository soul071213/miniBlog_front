import * as S from "./style";
import Title from "../../components/title";
import { useSelector ,useDispatch} from "react-redux";
import { useEffect,useState } from "react";
import {postUser,logout} from "./api";
import { setToken } from "../../store/slices/AccessSlice";
import { useNavigate } from "react-router-dom";

export default function Mypage(){
    const accessToken = useSelector(state=>state.access.token);
    const Dispatch = useDispatch();
    const [user,setUser]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();

    const get= async()=>{
        const users = await postUser(accessToken);
        console.log(users);
        setUser(users.user_id);
        setPassword(users.password);
    }

    useEffect(()=>{
        get();
    },[]);

    const logouts = async()=>{
        const log = await logout(accessToken);
        console.log(log);
        Dispatch(setToken(''));
        navigate('/login');
    }

    return(
        <S.Wrapper>
            <Title></Title>
            <S.GrayContainer>
                <S.Ps>
                    <S.TagP>아이디 : {user}</S.TagP>
                    <S.TagP>비밀번호 : {password}</S.TagP>
                </S.Ps>
                <S.ButtonWrapper>
                    <S.LogoutButton>
                        <S.TagP onClick={logouts}>로그아웃</S.TagP>
                    </S.LogoutButton>
                </S.ButtonWrapper>
            </S.GrayContainer>
        </S.Wrapper>
    );
}