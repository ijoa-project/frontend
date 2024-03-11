import { Header } from 'components/common'
import { ConfirmButton, PageTitle, PageTitleBar, SubText } from './styled'

export function AuthStep4() {
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <PageTitle style={{ textAlign: 'left' }}>기타 서류 등록 (자격증, 학력서류 등)</PageTitle>
        <PageTitleBar />
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#5D5A88', fontSize: 28, fontWeight: '800', margin: 40 }}>제출 가능한 학력 서류</div>
          <SubText style={{ textAlign: 'left', margin: '0% 35%' }}>
            <li>6개월 이내 발급받은 재학증명서</li>
            <li>휴학(제적) 증명서</li>
            <li>졸업증명서 혹은 학위증</li>
            <li>학교명, 학과명, 인적사항이 기재된 등록금 내역서</li>
          </SubText>
          <div style={{ margin: 50 }}>
            <div style={{ color: '#8D8BA7', fontSize: 20, fontWeight: '400' }}>파일업로드</div>
            <div style={{ display: 'inline-flex' }}>
              <input style={{ width: 250, height: 48, borderRadius: 8, border: '1px #CFD3D4 solid', margin: 10 }} />
              <button
                style={{
                  width: 150,
                  height: 52,
                  background: '#8D8BA7',
                  borderRadius: 8,
                  border: '1px #8D8BA7 solid',
                  color: 'white',
                  fontSize: 22,
                  fontWeight: '400',
                  margin: 10,
                }}
              >
                파일선택
              </button>
            </div>
          </div>
          <ConfirmButton style={{ margin: 20 }}>확인</ConfirmButton>
        </div>
      </div>
    </>
  )
}
