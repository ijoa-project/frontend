import { Container, List, ListItem } from '@mui/material'
import Header from 'components/common/Header'

function MyPageClient() {
  return (
    <>
      <Header />

      <Container>
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
      </Container>
      <Container>
        <div>
          <div>돌봄 서비스 신청 관리</div>
          <ListItem>돌봄 서비스 신청 및 관리</ListItem>
          <ListItem>돌봄 서비스 요청 현황 관리</ListItem>
        </div>
        <div>
          <div>돌봄 내역 조회</div>
          <ListItem>돌봄 내역 조회</ListItem>
        </div>
        <div>
          <div>돌봄 활동 정산</div>
          <ListItem>돌봄 활동 정산</ListItem>
        </div>
      </Container>
    </>
  )
}

export default MyPageClient
