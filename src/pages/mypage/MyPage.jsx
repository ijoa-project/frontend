import React, { useState, useEffect } from 'react'
import { Profile, Button, Section, Container, SectionTitle, List, ListItem, BtnBox } from './styled'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { Header, Footer } from 'components/common'
import instance from 'api/axios'
import { logout, addPosition } from 'module/userSlice'

export function MyPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLogin, userInfo } = useSelector((state) => state.user)
  const [data, setData] = useState({
    name: '',
    userId: '',
    email: '',
    position: '',
  })

  const navigateToCalculate = () => {
    navigate('/calculateteacher')
  }
  const onClickLogout = () => {
    if (window.confirm('로그아웃하시겠습니까?') === true) {
      dispatch(logout(userInfo))
      navigate('/')
    }
  }

  useEffect(() => {
    if (userInfo) {
      instance
        .get('/api/mypage', {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        })
        .then(function (response) {
          console.log(response)
          const { name, userId, email, position } = response.data
          dispatch(addPosition(position))
          setData({ ...data, name, userId, email, position })
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      window.alert('로그인 후 접속하실 수 있습니다.')
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Header />
      <Profile>
        <div style={{ padding: '0px 20px', color: '#6c757d' }}>
          <div style={{ color: 'black', marginBottom: '5px' }}>
            <span style={{ fontWeight: 700, fontSize: '24px' }}>{data.name}</span> 회원님
          </div>
          <div style={{ fontSize: '14px' }}> {data.userId} </div>
          <div style={{ fontSize: '14px' }}> {data.email} </div>
        </div>

        <BtnBox>
          <Button onClick={onClickLogout}>로그아웃</Button>
          <Button>회원정보 수정</Button>
        </BtnBox>
      </Profile>

      <Container>
        {data.position === 'parent' && (
          <>
            <Section>
              <SectionTitle>돌봄 서비스 신청 관리</SectionTitle>
              <List>
                <ListItem>돌봄 서비스 신청 및 관리</ListItem>
                <ListItem>돌봄 서비스 요청 현황 관리</ListItem>
              </List>
            </Section>
            <Section>
              <SectionTitle>돌봄 내역 조회</SectionTitle>
              <List>
                <ListItem>돌봄 내역 조회</ListItem>
              </List>
            </Section>
            <Section>
              <SectionTitle>돌봄 활동 정산</SectionTitle>
              <List>
                <ListItem>돌봄 활동 정산</ListItem>
              </List>
            </Section>
          </>
        )}
        {data.position === 'dolbomi' && (
          <>
            <Section>
              <SectionTitle>돌봄 지원서 관리</SectionTitle>
              <List>
                <ListItem>돌봄 지원서 등록</ListItem>
                <ListItem>돌봄 지원서 조회(수정,삭제) </ListItem>
                <ListItem>돌봄 요청 확인</ListItem>
              </List>
            </Section>
            <Section>
              <SectionTitle>돌봄 내역 조회</SectionTitle>
              <List>
                <ListItem>돌봄 내역 조회</ListItem>
              </List>
            </Section>
            <Section>
              <SectionTitle>돌봄 활동 정산</SectionTitle>
              <List>
                <ListItem onClick={navigateToCalculate}>계좌 등록</ListItem>
              </List>
            </Section>
          </>
        )}
      </Container>

      <Footer />
    </>
  )
}
