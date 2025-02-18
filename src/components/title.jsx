import styled from "styled-components";

const TitleText = styled.p`
    font-size: 24px;
    padding-top: 40px;
    padding-bottom: 24px;
`;


export default function title(){
    return(
        <TitleText>mini blog</TitleText>
    );
}