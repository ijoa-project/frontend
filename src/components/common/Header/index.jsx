import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Frame, Title, Contents, LoginBtn } from './styled'

function Header() {
  const navigate = useNavigate()

  const onClickUser = () => {
    navigate('/login')
  }

  const onClickHome = () => {
    navigate('/')
  }

  return (
    <>
      <Frame>
        <Title onClick={onClickHome}>IJOA</Title>
        <Contents>
          <div>
            <LoginBtn onClick={onClickUser}>회원가입/로그인</LoginBtn>
          </div>
        </Contents>
      </Frame>
    </>
  )
}
export default Header
