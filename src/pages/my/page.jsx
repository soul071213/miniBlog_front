import * as S from "./style";
import Title from "../../components/title";

export default function Mypage(){
    return(
        <S.Wrapper>
            <Title></Title>
            <S.GrayContainer>
                <S.Ps>
                    <S.TagP>아이디 : </S.TagP>
                    <S.TagP>비밀번호 : </S.TagP>
                </S.Ps>
                <S.ButtonWrapper>
                    <S.LogoutButton>
                        <S.TagP>로그아웃</S.TagP>
                    </S.LogoutButton>
                </S.ButtonWrapper>
            </S.GrayContainer>
        </S.Wrapper>
    );
}