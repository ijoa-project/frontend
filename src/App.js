import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import MainPage from './pages/main/MainPage.jsx'
import LoginPage from './pages/profile/login/LoginPage.jsx'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
