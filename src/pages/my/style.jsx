import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const GrayContainer  = styled.div`
    width: 95%;
    background-color: #F5F5F5;
    border-radius: 12px;
    padding: 5%;
`;

export const Ps = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
`

export const TagP = styled.p`
    font-size: 24px;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 64px;
`;

export const LogoutButton = styled.button`
    height: 72px;
    width: 20%;
    border-radius: 12px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;