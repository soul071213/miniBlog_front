import './App.css';
import DetailPage from './pages/detail/page';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [detailData, setDetailData] = useState();
  const [list, setGetList] = useState();

  useEffect(() => {
    getDetail();
    getList();
  }, []);

  // useEffect(() => {
  //   if (detailData) {
  //     alert(detailData[0].title);
  //   }
  // }, [detailData]);

  const getDetail = async () => {
    try {
      const res = await axios.post("http://localhost:3000/board/detail", { id: 1 });
      setDetailData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getList = async () => {
    try {
      const res = await axios.get("http://localhost:3000/board/list");
      setGetList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {detailData ? (
        <DetailPage title={detailData[0].title} content={detailData[0].detail} />
      ) : (
        <p>데이터를 불러오는 중...</p>
      )}
    </>
  );
}

export default App;
