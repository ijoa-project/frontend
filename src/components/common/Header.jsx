import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Frame, Title, Contents, LoginBtn, Menu, ArrowIcon, Dropdown, Item } from './styled'

export function Header() {
  const navigate = useNavigate()
  const { isLogin, userInfo } = useSelector((state) => state.user)
  const [activeMenu, setActiveMenu] = useState(false)

  const navs = {
    학부모: [
      { name: '돌보미 검색', path: '/searchDolbomi' },
      { name: '돌봄 서비스 신청', path: '/registerParent' },
    ],
    돌보미: [
      { name: '돌보미 인증', path: '/auth' },
      { name: '돌보미 프로필 등록', path: '/registerDolbomi' },
      { name: '돌봄 서비스 검색', path: '/searchParent' },
    ],
  }

  const onClickPosition = (menu) => {
    setActiveMenu(activeMenu === menu ? false : menu)
  }
  const onClickPath = (path) => {
    navigate(path)
  }

  return (
    <>
      <Frame>
        <Title onClick={() => navigate('/')}>IJOA</Title>
        <Contents>
          {Object.keys(navs).map((position) => (
            <Menu onClick={() => onClickPosition(position)} key={position}>
              {position}
              <ArrowIcon size="18" />

              {activeMenu === position && (
                <Dropdown>
                  {navs[position].map((nav) => (
                    <Item onClick={() => onClickPath(nav.path)} key={nav.name}>
                      {nav.name}
                    </Item>
                  ))}
                </Dropdown>
              )}
            </Menu>
          ))}
          {isLogin === true && (
            <>
              <LoginBtn onClick={() => navigate('/mypage')}>마이페이지</LoginBtn>
            </>
          )}
          {isLogin === false && (
            <>
              <LoginBtn onClick={() => navigate('/login')}>회원가입/로그인</LoginBtn>
            </>
          )}
        </Contents>
      </Frame>
    </>
  )
}
