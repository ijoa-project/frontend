import { Header } from 'components/common'
import { PageDetail, PageTitle, PageTitleBar, Text, TextWrap, TextHighlight, ConfirmButton } from './styled'
import CrimeAuthImg from 'assets/images/CrimeAuth.png'

export function AuthStep2() {
  return (
    <>
      <Header />
      <div style={{ marginTop: 70, textAlign: 'center' }}>
        <div style={{ color: '#5D5A88', fontSize: 36, fontWeight: '700' }}>성범죄 경력조회는 왜 해야되나요?</div>
        <PageDetail>
          <div>청소년성보호법 제56조에 의해 아동 청소년 관련기관 등에 취업이나 노무 제공(강연 등)을 하는 대상자는</div>
          <div>성별, 신분, 직위 등과 상관 없이 조회 결과를 필수적으로 해당 기관에 제출해야 합니다.</div>
          <div>
            아이조아는 같은 법에서 정한 대상 기관(교육기관)으로 취업대상자에 대한 성범죄 경력조회를 실시하여야 합니다.
          </div>
        </PageDetail>
        <div style={{ textAlign: 'left' }}>
          <PageTitle>성범죄 및 아동학대 조회 동의서 등록</PageTitle>
          <PageTitleBar />
        </div>
        <TextWrap>
          <Text>
            ① <TextHighlight>범죄경력회보서</TextHighlight> 발급시스템 접속 (crims.police.go.kr)
          </Text>
          <img style={{ width: 698, height: 362, margin: 15 }} src={CrimeAuthImg} alt="범죄경력회보서 발급시스템"></img>
          <Text>
            ② 우측 상단 <TextHighlight>로그인</TextHighlight> 클릭 및 로그인 방식 선택 (공동인증서, 아이핀, 휴대전화
            인증 중 택1)
          </Text>
          <Text>③ 취업예정자 발급 동의 신청 클릭</Text>
          <Text>
            ④ <TextHighlight>시설ID: AE242G, 검증번호: 5508</TextHighlight> 입력 후 조회 클릭
          </Text>
          <Text>⑤ 시설(기관)장/명 확인 후 동의 버튼 클릭 (아이조아)</Text>
          <Text>⑥ 신청서 작성 및 약관 동의 처리 (동의사유 - 취업예정, 주소지경찰서 - 서울경찰청, 서울중부경찰서)</Text>
          <Text>
            ⑦ 본인 회보서 확인 후 가장 <TextHighlight>하단의 본인확인완료(시설장출력)</TextHighlight> 버튼 클릭
          </Text>
        </TextWrap>
        <ConfirmButton style={{ margin: 50 }}>확인</ConfirmButton>
      </div>
    </>
  )
}
