import { Container } from './styled'

function RegisterParentForm() {
  return (
    <>
      <Container>
        <div>돌봄 서비스 신청하기</div>
        <select>
          <option disabled selected>
            돌봄 유형을 선택하세요
          </option>
          <option>놀이 돌봄</option>
          <option>등하원 돌봄</option>
          <option>교육 돌봄</option>
          <option>가사 돌봄</option>
        </select>

        <select>
          <option disabled selected>
            자녀의 연령을 선택하세요
          </option>
          <option>48개월 미만</option>
          <option>7세 미만</option>
          <option>10세 미만</option>
          <option>13세 미만</option>
        </select>
        <select>
          <option disabled selected>
            돌봄 기간을 선택해주세요
          </option>
          <option>정기 돌봄(최소 한 달, 주 2회 이상)</option>
          <option>비정기 돌봄</option>
          <option>긴급 돌봄</option>
        </select>

        <input type="time" placeholder="시작 시간을 선택해주세요" />
        <input type="time" placeholder="종료 시간을 선택해주세요" />

        <input type="date" placeholder="시작 날짜를 선택해주세요" />
        <input type="date" placeholder="종료 날짜를 선택해주세요" />

        <input type="text" placeholder="돌봄 장소를 입력해주세요" />
        <input type="text" placeholder="자녀의 성별을 입력해주세요" />
        <input type="text" placeholder="자녀의 이름을 입력해주세요" />
        <input type="text" placeholder="제목" />
        <input type="text" placeholder="내용" />

        <input type="number" placeholder="시급을 작성해주세요" />

        <button>등록</button>
      </Container>
    </>
  )
}

export default RegisterParentForm
