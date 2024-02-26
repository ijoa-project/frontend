import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import './pages/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage' element={<MyPageClient/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
