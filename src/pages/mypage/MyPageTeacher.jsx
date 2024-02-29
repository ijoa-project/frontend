import { List, ListItem, Box } from '@mui/material'
import Header from '../../components/common/Header/Header'
import { Profile, ProfileImg, Section, Container } from './styled'
import profileImage from '../../assets/userprofile.jpg'
import { useNavigate } from 'react-router'

function MyPageTeacher() {
  return (
    <>
      <Header />

      <Profile>
        <ProfileImg src={profileImage} alt="profile-image" />
        <div>
          <div>
            <h3>{'홍길동'}</h3> 회원님
          </div>
          <div> {'userID'} </div>
          <div> {'EMAIL ADDRESS'} </div>
        </div>

        <div>
          <button>로그아웃</button>
          <button>회원정보 수정</button>
        </div>
      </Profile>

      <Box
        sx={{
          margin: '30px 120px',
          width: '1200px',
          height: '1px',
          background: '#C0C0C0',
          alignSelf: 'center',
        }}
      />

      <Container>
        <Section>
          <div>돌봄 지원서 관리</div>
          <ListItem>돌봄 지원서 등록</ListItem>
          <ListItem>돌봄 지원서 조회(수정,삭제) </ListItem>
          <ListItem>돌봄 요청 확인</ListItem>
        </Section>
        <Section>
          <div>돌봄 내역 조회</div>
          <ListItem>돌봄 내역 조회</ListItem>
        </Section>
        <Section>
          <div>돌봄 활동 정산</div>
          <ListItem>계좌 등록</ListItem>
        </Section>
      </Container>
    </>
  )
}

export default MyPageTeacher
