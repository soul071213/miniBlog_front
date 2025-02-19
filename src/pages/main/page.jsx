import styled from "styled-components";
import Title from "../../components/title";
import { useEffect, useState } from "react";
import { getList, postBoard } from "./api"; // api.js에서 가져오기

const Wrapper = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const GreyMainContainer = styled.div`
    width: 100%;
    background-color: #F5F5F5;
    border-radius: 12px;
`;

const MainContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    padding: 5%;
    width: 100%;
    height: 20%;
    justify-content: space-between;
`;

const WriteLists = styled.div`
    width: 30%;
    padding: 100px 0;
    margin: 24px 0;
    background-color: white;
    font-size: 24px;
`;

const InputContainer = styled.input`
    margin: 2% 2%;
    width: 95%;
    font-size: 24px;
`;

export default function MainPage() {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [Lists, setLists] = useState([]);

    const fetchList = async () => {
        const data = await getList();
        setLists(data);
    };

    const submit = async () => {
        await postBoard(title, detail);
        setTitle("");
        setDetail("");
        fetchList(); // 새 데이터 불러오기
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <Wrapper>
            <Title />
            <GreyMainContainer>
                <MainContainer>
                    {Lists.length > 0 ? (
                        Lists.map((list, index) => (
                            <WriteLists key={index}>
                                <p>{list.title}</p>
                                <p>{list.detail}</p>
                            </WriteLists>
                        ))
                    ) : (
                        <div>로딩 중</div>
                    )}
                </MainContainer>
            </GreyMainContainer>

            <GreyMainContainer>
                <InputContainer value={title} onChange={(e) => setTitle(e.target.value)} />
                <InputContainer value={detail} onChange={(e) => setDetail(e.target.value)} />
                <button onClick={submit}>새글</button>
            </GreyMainContainer>
        </Wrapper>
    );
}
