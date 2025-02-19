import './App.css';
import DetailPage from './pages/detail/page';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainPage from './pages/main/page';

function App() {
  // useEffect(() => {
  //   if (detailData) {
  //     alert(detailData[0].title);
  //   }
  // }, [detailData]);

  return (
    <>
      <MainPage/>
    </>
  );
}

export default App;
