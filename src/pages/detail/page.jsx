import styled from "styled-components";
import Title from "../../components/title";
import Context from "../../components/detail/context";

const Wrapper = styled.div`
    width: 100vw;
    padding: 0px 5%;
    display: flex;
    flex-direction: column;
`;

const MainContext = styled.div`
    width: 80%;
    height: 300px;
    color: white;
`;

const MainContextTitle = styled.p`
    font-size: 24px;
    padding-left: 24px;
    padding-top: 24px;
`;

const MainContextContent = styled.p`
    font-size: 24px;
    padding-left: 24px;
    padding-top: 8px;
`;

const BoardContext = styled.div`
    padding-top: 113px;
    width: 80%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export default function detailPage(props){
    return(
        <Wrapper>
            <Title />
            <Context>
                <MainContext>
                    <MainContextTitle>{props.title}</MainContextTitle>
                    <MainContextContent>{props.content}</MainContextContent>
                </MainContext>
                
            </Context>
        </Wrapper>
    )
}