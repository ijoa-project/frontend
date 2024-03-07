import { Header } from 'components/common'
import { ConfirmButton, SubText, PageTitle, PageTitleBar } from './styled'

export function AuthStep1() {
  return (
    <>
      <Header />
      <div style={{ marginTop: 30, textAlign: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <PageTitle>신분증 등록</PageTitle>
          <PageTitleBar />
        </div>
        <SubText style={{ marginTop: 50 }}>
          <div>주민등록증, 운전면허, 여권 등</div>
          <div>본인 확인이 가능한 신분증 파일을 등록해주세요</div>
          <div>스캔 파일 혹은 빛이 반사되지 않게 촬영된 사진</div>
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
        <ConfirmButton>제출</ConfirmButton>
      </div>
    </>
  )
}
