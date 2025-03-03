import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Redux
import {Provider} from "react-redux";
import store from './store/store';

//페이지
import MainPage from './pages/main/page';
import DetailPage from './pages/detail/page';
import LoginPage from './pages/login/page';
import SignUp from './pages/signUp/page';
import Mypage from './pages/my/page';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path='/mypage' element={<Mypage></Mypage>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
