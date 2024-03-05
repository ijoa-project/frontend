import { Header } from 'components/common'

export function AuthStep2() {
  return (
    <>
      <Header />
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <div style={{ color: '#5D5A88', fontSize: 36, fontWeight: '700' }}>성범죄 경력조회는 왜 해야되나요?</div>
        <div style={{ color: '#9795B5', fontSize: 17, fontWeight: 400, lineHeight: '30px', margin: 20 }}>
          <div>청소년성보호법 제56조에 의해 아동 청소년 관련기관 등에 취업이나 노무 제공(강연 등)을 하는 대상자는</div>
          <div>성별, 신분, 직위 등과 상관 없이 조회 결과를 필수적으로 해당 기관에 제출해야 합니다.</div>
          <div>
            아이조아는 같은 법에서 정한 대상 기관(교육기관)으로 취업대상자에 대한 성범죄 경력조회를 실시하여야 합니다.
          </div>
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ color: '#5D5A88', marginLeft: 70, fontSize: 20, fontWeight: '700' }}>
            성범죄 및 아동학대 조회 동의서 등록
          </div>
          <div style={{ display: 'flex', margin: '10px 70px 10px 70px', height: 0, border: '0.7px #C0C0C0 solid' }} />
        </div>
        <div style={{ textAlign: 'left', margin: '10px 70px 10px 70px' }}>
          <div style={{ padding: 10, color: '#8D8BA7', fontSize: 23, fontWeight: '400' }}>
            ① 범죄경력회보서 발급시스템 접속 (crims.police.go.kr)
          </div>
          <div>② 우측 상단 로그인 클릭 및 로그인 방식 선택 (공동인증서, 아이핀, 휴대전화 인증 중 택1)</div>
          <div>③ 취업예정자 발급 동의 신청 클릭</div>
          <div>④ 시설ID: AE242G, 검증번호: 5508 입력 후 조회 클릭</div>
          <div>⑤ 시설(기관)장/명 확인 후 동의 버튼 클릭 (아이조아)</div>
          <div>⑥ 신청서 작성 및 약관 동의 처리 (동의사유 - 취업예정, 주소지경찰서 - 서울경찰청, 서울중부경찰서)</div>
          <div>⑦ 본인 회보서 확인 후 가장 하단의 본인확인완료(시설장출력) 버튼 클릭</div>
        </div>
      </div>
    </>
  )
}
