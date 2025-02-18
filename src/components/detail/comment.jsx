import styled from "styled-components";

const Wrapper = styled.div`
    width: 90%;
    height: 80px;
    padding: 0px 24px;
`;

const Context = styled.div`
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width:100%;
`;

export default function context(props){
    return(
        <Wrapper>
            <Context>
                {props.comment}
                {props.time}
            </Context>
        </Wrapper>
    )
}