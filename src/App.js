import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import MainPage from 'pages/main'
import LoginPage from 'pages/profile/login'
import SignupPage from 'pages/profile/signup'
import { MyPageClient, MyPageTeacher } from 'pages/mypage'

function App() {
  const GlobalStyle = createGlobalStyle` 
  body{
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
