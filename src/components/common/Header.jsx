import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Frame, Title, Contents, LoginBtn, Menu, ArrowIcon, Dropdown, Item } from './styled'

export function Header() {
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState(false)

  const routes = {
    '돌보미 검색': '/searchDolbomi',
    '돌봄 서비스 신청': '/recruitDolbomi',
    '돌보미 인증': '/auth',
    '돌보미 프로필 등록': '/registerProfile',
    '돌봄 서비스 검색': '/searchCareservice',
  }

  const menus = [
    { label: '학부모', items: ['돌보미 검색', '돌봄 서비스 신청'] },
    { label: '돌보미', items: ['돌보미 인증', '돌보미 프로필 등록', '돌봄 서비스 검색'] },
  ]

  const onClickMenu = (label) => {
    // 메뉴가 이미 열려있으면 false로 변환, 아니라면 menuId에 해당하는 메뉴 활성화
    setActiveMenu(activeMenu === label ? false : label)
  }

  return (
    <>
      <Frame>
        <Title onClick={() => navigate('/')}>IJOA</Title>
        <Contents>
          {menus.map((menu) => (
            <Menu key={menu.label} onClick={() => onClickMenu(menu.label)}>
              {menu.label}
              <ArrowIcon size="18" />

              {/* activeMenu가 학부모/돌보미일때마다 그에 맞는 드롭다운 표시 */}
              {activeMenu === menu.label && (
                <Dropdown>
                  {menu.items.map((item) => (
                    <Item key={item} onClick={() => navigate(routes[item])}>
                      {item}
                    </Item>
                  ))}
                </Dropdown>
              )}
            </Menu>
          ))}
          <LoginBtn onClick={() => navigate('/login')}>회원가입/로그인</LoginBtn>
        </Contents>
      </Frame>
    </>
  )
}
