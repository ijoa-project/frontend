import { Footer, Header } from 'components/common'
import styled from 'styled-components'
import userIcon from 'assets/images/icon_user.png'
import homeIcon from 'assets/images/icon_home.png'

export function CalculateTeacher() {
  return (
    <>
      <Header />
      <div>
        <PageTitle style={{ marginTop: 30 }}>돌봄활동정산</PageTitle>
        <PageTitleBar />
      </div>
      <div style={{ display: 'flex', padding: '30px 70px 30px 70px' }}>
        <div style={{ width: '50%', float: 'left' }}>
          <SectionTitle>계좌등록</SectionTitle>
          <div style={{ padding: 30 }}>
            <div>
              <div>
                <img style={{ width: 28, height: 28 }} src={userIcon} alt="person icon" />
                <Input placeholder="예금주명을 입력하세요" /> <br />
              </div>
              <div>
                <img style={{ width: 28, height: 28 }} src={homeIcon} alt="home icon" />
                <Input placeholder="은행을 선택하세요" />
                <Input placeholder="계좌번호를 입력하세요" />
              </div>
              <Button>등록하기</Button>
            </div>
          </div>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <SectionTitle>활동비 정산 내역 조회</SectionTitle>
          <Button>조회하기</Button>
          <SectionTitle>미정산 활동 내역 조회</SectionTitle>
          <Button>조회하기</Button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export const PageTitle = styled('div')(() => ({
  color: '#5D5A88',
  marginLeft: 70,
  fontSize: 20,
  fontWeight: '700',
}))

export const PageTitleBar = styled('div')(() => ({
  display: 'flex',
  margin: '10px 70px 10px 70px',
  height: 0,
  border: '0.7px #C0C0C0 solid',
}))

export const SectionTitle = styled('div')(() => ({
  color: '#5D5A88',
  marginLeft: 30,
  fontSize: 18,
  fontWeight: 650,
}))

export const Button = styled('button')(() => ({
  backgroundColor: '#5D5A88',
  width: 400,
  height: 55,
  borderRadius: 47.27,
  margin: '25px 40px 30px',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FFFFFF',
  fontSize: 22,
  border: 'none',
  '&:hover': {
    opacity: '70%',
  },
}))

const Input = styled('input')(() => ({
  background: '#FCFCFD',
  borderRadius: 12,
  height: 40,
  border: '1.5px #DFDFE6 solid',
  alignItems: 'center',
  color: '#87898E',
  padding: '5px 20px',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 16,
  margin: 10,
}))
