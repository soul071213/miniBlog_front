import styled from "styled-components";
import Title from "../../components/title";

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
    const getDetail = async () => {
        try {
          const res = await axios.post("http://localhost:3000/board/detail", { id: 1 });
          setDetailData(res.data);
        } catch (err) {
          console.log(err);
        }
      };
    // const {title,content,comments}=props;
    const title="d";
    const content="d";
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
                {/* {comments.map((comment,index)=>{
                    return(
                        <Comments key={index}>
                            {comment.comment}
                            {comment.time}
                        </Comments>
                    );
                })} */}
            </GrayMainContent>
        </Wrapper>
        </>
        
    )
}