import { Container, Section, SubTitle, Title, Content } from './styled'
import main from '../../assets/main1.png'
import Header from '../../components/common/Header/Header'

function MainPage() {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <SubTitle>젠킨스 테스트</SubTitle>
          <Title>함께 웃는 돌봄의 시작,</Title>
          <Title>아이조아와 함께하세요!</Title>
          <Content>
            아이조아는 철저한 검증 과정을 통해 선발된 돌보미들과 함께 <br />
            다양한 돌봄 서비스를 제공합니다.
          </Content>
        </Section>

        <Section>
          <img src={main} width={580} height={412} alt="main-background" />
        </Section>
      </Container>
    </>
  )
}

export default MainPage
