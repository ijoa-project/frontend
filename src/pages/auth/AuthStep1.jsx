import { Header } from 'components/common'

export function AuthStep1() {
  return (
    <>
      <Header />
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <div>신분증 등록</div>
        <div style={{ color: '#9795B5', fontSize: 18, fontWeight: 400, lineHeight: '25px', margin: 20 }}>
          <div>주민등록증 모바일 확인서비스 이용을 위해</div>
          <div>실물 주민등록증과 동일한 정보를 기입해주세요.</div>
        </div>
      </div>
    </>
  )
}
