import styled from "styled-components";
import Title from "../../components/title";
import { useParams } from 'react-router-dom';
import {getDetail,getComments,postComment} from "./api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
    width: 100%;
    padding: 0px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GrayMainContent = styled.div`
    margin-top: 24px;
    width: 100%;
    border-radius: 12px;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2% 0;
`;

const MainContent = styled.div`
    width: 95%;
    height: 300px;
    background-color: white;
`;

const Text = styled.p`
    font-size: 24px;
    padding-left: 24px;
    padding-top: 24px;
`;

const Comments=styled.div`
    padding: 5px 24px;
    width: 95%;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
`;

export default function detailPage(){
    const {id}=useParams();
    const [text,setText]=useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [commentt,setComment]=useState([]);
    const AccessToken = useSelector(state=>state.access.token);

    const getDetails=async()=>{
        const data =await getDetail(id,AccessToken);
        setTitle(data.title);
        setContent(data.detail);
    }

    const getComm=async()=>{
        const data = await getComments(id,AccessToken);
        setComment(data);
        
    }
    useEffect(()=>{
        getComm();
        getDetails();
    },[id]);

    const submit= async()=>{
        await postComment(id,text,AccessToken);
        getComm();
    }

    return(
        <>
        <Wrapper>
            <Title></Title>

            <GrayMainContent>
                <MainContent>
                    <Text>{title}</Text>
                    <Text>{content}</Text>
                </MainContent>
            </GrayMainContent>
            <GrayMainContent>
                {commentt?.map((commentss,index)=>(
                        <Comments key={index}>
                            <p>{commentss.content}</p>
                            <p>{commentss.created_at}</p>
                            
                        </Comments>
                ))}
            </GrayMainContent>
            <input type="text"  value={text} onChange={(e)=>setText( e.target.value)}/>
            <button onClick={()=>{submit();}}>제출</button>
        </Wrapper>
        </>
        
    )
}