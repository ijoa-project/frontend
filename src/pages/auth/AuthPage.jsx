import { Footer, Header } from 'components/common'
import { AuthButton, StepButton } from './styled'
import { useNavigate } from 'react-router'

export function AuthPage() {
  const navigate = useNavigate()

  const steps = [
    { label: '신분증 등록', link: '/auth1' },
    { label: '성범죄 및 아동학대 조회 동의서 등록', link: '/auth2' },
    { label: '보건증 등록', link: '/auth3' },
    { label: '기타 서류 등록(자격증, 학력서류 등)', link: '/auth4' },
  ]

  return (
    <>
      <Header />
      <div style={{ marginTop: 70, textAlign: 'center' }}>
        <div style={{ color: '#5D5A88', fontSize: 36, fontWeight: 700 }}>돌보미 인증</div>
        <div style={{ color: '#9795B5', fontSize: 18, fontWeight: 400, lineHeight: '30px', margin: 20 }}>
          <div>아이조아는 철저한 신원검증을 통해 돌보미를 선발합니다.</div>
          <div>돌보미가 되기 위한 4가지 필수 절차를 확인해주세요.</div>
        </div>
        <AuthButton>인증하기</AuthButton>
        <div style={{ padding: 20 }}>
          {steps.map((step, index) => (
            <StepButton key={step.label} onClick={() => navigate(step.link)}>
              {index + 1}.{step.label}
            </StepButton>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
