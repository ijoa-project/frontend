import { Box, Button } from '@mui/material'
import { Profile, ProfileImg, Section, Container, SectionTitle, List, ListItem } from './styled'
import profileImage from 'assets/images/userprofile.jpg'
import { useNavigate } from 'react-router'
import { Header, Footer } from 'components/common'

export function MyPageClient() {
  // const items = [{'돌봄 서비스 신청 및 관리', }, ]

  // const

  return (
    <>
      <Header />

      <Profile>
        <ProfileImg src={profileImage} alt="profile-image" />
        <div style={{ marginLeft: 30, justifyContent: 'flex-start' }}>
          <div>
            <h3 style={{ fontSize: 30, display: 'inline' }}>{'홍길동'}</h3> 회원님
          </div>
          <div> {'/*userID*/'} </div>
          <div> {'/*EMAIL ADDRESS*/'} </div>
        </div>

        <div style={{ marginLeft: 'auto' }}>
          <Button>로그아웃</Button>
          <Button>회원정보 수정</Button>
        </div>
      </Profile>

      <Box
        sx={{
          margin: '30px 120px 20px 120px',
          height: '1px',
          display: 'flex',
          background: '#C0C0C0',
          alignSelf: 'center',
        }}
      />

      <Container style={{ margin: '15px 120px 20px 120px' }}>
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
      </Container>

      <Footer />
    </>
  )
}
