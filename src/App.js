import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main/MainPage.jsx'
import LoginPage from './pages/profile/login/LoginPage.jsx'
import MyPageClient from './pages/mypage/MyPageClient.jsx'
import MyPageTeacher from './pages/mypage/MyPageTeacher.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypageclient" element={<MyPageClient />} />
        <Route path="/mypageteacher" element={<MyPageTeacher />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
