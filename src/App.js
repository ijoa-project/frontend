import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main/MainPage.jsx'
import LoginPage from './pages/profile/login/LoginPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
