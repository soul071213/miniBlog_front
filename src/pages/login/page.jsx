import styled from "styled-components";
import Title from "../../components/title";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./api";
import {useRecoilState } from "recoil";
import { access } from "../../atom/access";

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

const SubmitButton = styled.button`
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

export default function LoginPage(){
    const [id,setId]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate(); 
    const [accessToken, setAccessToken] = useRecoilState(access);

    const submit=async()=>{
        const data = await login(id,password);
        if (data.status === 200) {
            setAccessToken(data.data);
            console.log(accessToken);
            navigate('/');
        }
    }

    return(
        <> 
            <Wrapper>
                <Title></Title>
                <GrayContainer>
                    <InputContainer value={id} onChange={(e)=>{setId(e.target.value)}}></InputContainer>
                    <InputContainer value={password} onChange={(e)=>{setPassword(e.target.value)}}></InputContainer>
                    <SubmitButton onClick={submit} >로그인</SubmitButton>
                </GrayContainer>
            </Wrapper>
        </>
    );

}