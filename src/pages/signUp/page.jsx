import styled from "styled-components";
import Title from "../../components/title";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "./api";

const Wrapper = styled.div`
    width: 100%;
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const GrayContainer = styled.div`
    width: 100%;
    height: 360px;
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 48px 10%;
`;

const InputContainer = styled.input`
    width: 100%;
    height: 77px;
    background-color: white;
    border-radius: 8px;
    border: none;
    font-size: 24px;
    padding: 12px;
`;

const SubmitButton = styled(Link)`
    text-decoration: none; /* 기본 밑줄 제거 */
    color: inherit; /* 부모 요소의 색상 상속 */
    width: 275px;
    height: 64px;
    display: flex;
    align-items: center;
    border: none;
    justify-content: center;
    font-size: 24px;
    border-radius: 12px;
    background-color: white;
`;

export default function SignUp(){
    const [id,setId]=useState("");
    const [password,setPassword]=useState("");

    const submit=async()=>{
        await signUp(id,password);
    }
    
    return(
        <> 
            <Wrapper>
                <Title></Title>
                <GrayContainer>
                    <InputContainer value={id} onChange={(e)=>setId(e.target.value)}></InputContainer>
                    <InputContainer value={password} onChange={(e)=>setPassword(e.target.value)}></InputContainer>
                    <SubmitButton onClick={submit} to={'/login'}>회원가입</SubmitButton>
                </GrayContainer>
            </Wrapper>
        </>
    );
}