import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import MainPage from 'pages/main'
import LoginPage from 'pages/profile/login'
import SignupPage from 'pages/profile/signup'
import { CalculateTeacher, MyPageClient, MyPageTeacher, CareHistory } from 'pages/mypage'
import { AuthPage, AuthStep1, AuthStep2, AuthStep3, AuthStep4 } from 'pages/auth'
import basicFont from 'assets/fonts/NanumGothic.ttf'
import SearchDolbomi from 'pages/search/SearchDolbomi'
import SearchParent from 'pages/search/SearchParent'
import RegisterDolbomi from 'pages/register/RegisterDolbomi'
import RegisterParent from 'pages/register/RegisterParent'

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
        <Route path="/auth3" element={<AuthStep3 />} />
        <Route path="/auth4" element={<AuthStep4 />} />
        <Route path="/calculateteacher" element={<CalculateTeacher />} />
        <Route path="/carehistory" element={<CareHistory />} />
        <Route path="/searchDolbomi" element={<SearchDolbomi />} />
        <Route path="/searchParent" element={<SearchParent />} />
        <Route path="/registerDolbomi" element={<RegisterDolbomi />} />
        <Route path="/registerParent" element={<RegisterParent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
