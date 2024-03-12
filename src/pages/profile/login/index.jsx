import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Header } from 'components/common'
import {
  Container,
  LoginBtn,
  InputField,
  Title,
  LoginForm,
  Content,
  Body,
  Option,
  OptionTxt,
  SignupBtn,
} from './styled'
import instance from 'api/axios'

function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onClickSignup = () => {
    navigate('/signup')
  }

  const onClickLogin = async () => {
    try {
      const response = await instance.post('/login', {
        username: username,
        password: password,
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Header />
      <Body>
        <Container>
          <Title>로그인</Title>
          <LoginForm>
            <Option>
              <OptionTxt>계정이 없나요?</OptionTxt>
              <SignupBtn onClick={onClickSignup}>회원가입하기</SignupBtn>
            </Option>
            <Content>아이디를 입력하세요</Content>
            <InputField type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Content>비밀번호를 입력하세요</Content>
            <InputField type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </LoginForm>
          <LoginBtn onClick={onClickLogin}>로그인하기</LoginBtn>
        </Container>
      </Body>
    </>
  )
}

export default LoginPage
