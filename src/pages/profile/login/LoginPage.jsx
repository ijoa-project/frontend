import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../../components/common/Header/Header'
import { Container, LoginButton, IDField, PWField, Title } from './styled'
import instance from '../../../api/axios'

function LoginPage() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [position, setPosition] = useState('')
  const navigate = useNavigate()

  const onClickSignup = () => {
    navigate('/signup')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>로그인</Title>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#8D8BA7' }}>
            <div style={{ marginTop: '20px' }}>아이디를 입력하세요</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>계정이 없나요?</div>
              <div onClick={onClickSignup} style={{ color: '#B87514', cursor: 'pointer' }}>
                회원가입하기
              </div>
            </div>
          </div>
          <IDField placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />

          <div style={{ width: 451, height: 92, position: 'relative' }}>
            <div
              style={{
                left: 0,
                top: -2,
                color: '#8D8BA7',
                fontSize: 16,
                fontFamily: 'Poppins',
                fontWeight: '400',
              }}
            >
              비밀번호를 입력하세요
            </div>
            <PWField
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LoginButton onClick="">로그인하기</LoginButton>
          </div>
        </div>
      </Container>
    </>
  )
}
export default LoginPage
