import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import MainPage from 'pages/main'
import LoginPage from 'pages/profile/login'
import SignupPage from 'pages/profile/signup'
import { MyPageClient, MyPageTeacher } from 'pages/mypage'
import { AuthPage, AuthStep1, AuthStep2 } from 'pages/auth'
import basicFont from 'assets/fonts/NanumGothic.ttf'

function App() {
  const GlobalStyle = createGlobalStyle` 
  @font-face {
  font-family: 'basicFont';
  src: url(${basicFont}) format('truetype');
}

  body{
    font-family: 'basicFont';
    padding: 0;
    margin: 0;
    
  }
`
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mypageclient" element={<MyPageClient />} />
        <Route path="/mypageteacher" element={<MyPageTeacher />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth1" element={<AuthStep1 />} />
        <Route path="/auth2" element={<AuthStep2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
