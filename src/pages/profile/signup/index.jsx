import { Header } from 'components/common'
import { Container, Title, Divider, LabelContent, Content, SignupForm, InputField, Label } from './styled'

function SignupPage() {
  return (
    <>
      <Header />
      <Container>
        <Title>회원가입</Title>
        <SignupForm>
          <Divider>
            <LabelContent>역할</LabelContent>
            <Label>
              <input type="radio" name="option" value="학부모" />
              학부모
            </Label>
            <Label>
              <input type="radio" name="option" value="돌보미" />
              돌보미
            </Label>
          </Divider>
          <Divider>
            <Content>이름</Content>
            <InputField type="text" />
          </Divider>
          <Divider>
            <Content>아이디</Content>
            <InputField type="text" />
          </Divider>
          <Divider>
            <Content>비밀번호</Content>
            <InputField type="password" />
          </Divider>
          <Divider>
            <Content>비밀번호 확인</Content>
            <InputField type="password" />
          </Divider>
          <Divider>
            <Content>생년월일</Content>
            <InputField type="text" placeholder="YYYY / MM / DD" />
          </Divider>
          <Divider>
            <LabelContent>성별</LabelContent>
            <Label>
              <input type="radio" name="option" value="학부모" />남
            </Label>
            <Label>
              <input type="radio" name="option" value="돌보미" />여
            </Label>
          </Divider>
          <Divider>
            <Content>전화번호</Content>
            <InputField type="text" placeholder="010-1234-5678" />
          </Divider>
          <Divider>
            <Content>주소</Content>
            <InputField type="text" />
          </Divider>
        </SignupForm>
      </Container>
    </>
  )
}
export default SignupPage
