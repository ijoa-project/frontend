import { Header } from 'components/common'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Title, Divider, LabelContent, Content, SignupForm, InputField, Label, SignupBtn } from './styled'
import instance from 'api/axios'

function SignupPage() {
  const navigate = useNavigate()
  const [position, setPosition] = useState()
  const [id, setId] = useState()
  const [pw, setPw] = useState()
  const [name, setName] = useState()
  const [birthDate, setBirthDate] = useState()
  const [gender, setGender] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()

  const handleSubmit = async (event) => {
    try {
      const response = await instance.post('/api/user/join', {
        position,
        id,
        pw,
        name,
        birthDate,
        gender,
        phone,
        email,
        address,
      })
      console.log(response.data)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Header />
      <Container>
        <Title>회원가입</Title>
        <SignupForm onSubmit={handleSubmit}>
          {/* <Divider>
            <LabelContent>역할</LabelContent>
            <Label>
              <input type="radio" name="option" value="학부모" />
              학부모
            </Label>
            <Label>
              <input type="radio" name="option" value="돌보미" />
              돌보미
            </Label>
          </Divider> */}
          <Divider>
            <LabelContent>역할</LabelContent>
            <Label>
              <input
                type="radio"
                name="position"
                value="parent"
                checked={position === 'parent'}
                onChange={(e) => setPosition(e.target.value)}
              />
              학부모
            </Label>
            <Label>
              <input
                type="radio"
                name="position"
                value="dolbomi"
                checked={position === 'dolbomi'}
                onChange={(e) => setPosition(e.target.value)}
              />
              돌보미
            </Label>
          </Divider>

          <Divider>
            <Content>이름</Content>
            <InputField type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Divider>
          <Divider>
            <Content>아이디</Content>
            <InputField type="text" value={id} onChange={(e) => setId(e.target.value)} />
          </Divider>
          <Divider>
            <Content>비밀번호</Content>
            <InputField type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
          </Divider>
          <Divider>
            <Content>비밀번호 확인</Content>
            <InputField type="password" />
          </Divider>
          <Divider>
            <Content>생년월일</Content>
            <InputField
              type="text"
              placeholder="YYYY / MM / DD"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Divider>
          <Divider>
            <LabelContent>성별</LabelContent>
            <Label>
              <input
                type="radio"
                name="gender"
                value="남"
                checked={gender === '남'}
                onChange={(e) => setGender(e.target.value)}
              />
              남
            </Label>
            <Label>
              <input
                type="radio"
                name="gender"
                value="여"
                checked={gender === '여'}
                onChange={(e) => setGender(e.target.value)}
              />
              여
            </Label>
          </Divider>
          <Divider>
            <Content>전화번호</Content>
            <InputField
              type="text"
              placeholder="010-1234-5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Divider>
          <Divider>
            <Content>주소</Content>
            <InputField type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </Divider>
          <SignupBtn type="submit">가입하기</SignupBtn>
        </SignupForm>
      </Container>
    </>
  )
}
export default SignupPage
