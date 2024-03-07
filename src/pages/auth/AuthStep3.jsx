import { Header } from 'components/common'
import { ConfirmButton, PageTitle, PageTitleBar, SubText } from './styled'

export function AuthStep3() {
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <PageTitle style={{ textAlign: 'left' }}>보건증 등록</PageTitle>
        <PageTitleBar />
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#5D5A88', fontSize: 28, fontWeight: '800', margin: 40 }}>보건증 등록</div>
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
