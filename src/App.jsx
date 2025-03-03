import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/page';
import DetailPage from './pages/detail/page';
import LoginPage from './pages/login/page';
import SignUp from './pages/signUp/page';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
