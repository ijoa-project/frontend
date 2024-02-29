import { Container, Section_first, Section_second, SubTitle, Title, Content, Img } from './styled'
import main from 'assets/main1.png'
import Header from 'components/common/Header/Header'

function MainPage() {
  return (
    <>
      <Header />
      <Container>
        <Section_first>
          <SubTitle>공동체 가족을 위한 공유형 육아 플랫폼</SubTitle>
          <Title>
            함께 웃는 돌봄의 시작,
            <br />
            아이조아와 함께하세요!
          </Title>
          <Content>
            아이조아는 철저한 검증 과정을 통해 선발된 돌보미들과 함께 <br />
            다양한 돌봄 서비스를 제공합니다.
          </Content>
        </Section_first>

        <Section_second>
          <Img src={main} alt="main-background" />
        </Section_second>
      </Container>
    </>
  )
}

export default MainPage
