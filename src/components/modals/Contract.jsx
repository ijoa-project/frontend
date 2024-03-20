import styled from 'styled-components'
import UserIcon from 'assets/images/icon_user.png'
import CalenderIcon from 'assets/images/icon_calendar.png'
import ClockIcon from 'assets/images/icon_clock.png'
import NoteIcon from 'assets/images/icon_notepad.png'

export function Contract(props) {
  const contract = props.data
  const disable = props.inputDisabled

  return (
    <>
      <Row>
        <Wrapper>
          <IconImg draggable={false} src={UserIcon} />
          <InputElement>
            <InputTitle>작성자</InputTitle>
            <Input style={{ width: 150 }} placeholder="작성자" value={'작성자 by ID'} disabled={disable.parent} />
          </InputElement>
        </Wrapper>
        <Wrapper>
          <IconImg draggable={false} src={UserIcon} />
          <InputElement>
            <InputTitle>선생님</InputTitle>
            <Input style={{ width: 150 }} placeholder="선생님" value={'돌보미 by ID'} disabled={disable.dolbomi} />
          </InputElement>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper>
          <IconImg draggable={false} src={CalenderIcon} />
          <InputElement>
            <InputTitle>시작날짜</InputTitle>
            <Input
              style={{ width: 150 }}
              placeholder="시작날짜"
              value={contract.date[0]}
              disabled={disable.startDate}
            />
          </InputElement>
        </Wrapper>
        <Wrapper>
          <IconImg draggable={false} src={CalenderIcon} />
          <InputElement>
            <InputTitle>종료날짜</InputTitle>
            <Input
              style={{ width: 150 }}
              placeholder="종료날짜"
              value={contract.date[contract.date.length - 1]}
              disabled={disable.endDate}
            />
          </InputElement>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper>
          <IconImg draggable={false} src={ClockIcon} />
          <InputElement>
            <InputTitle>시작시간</InputTitle>
            <Input
              style={{ width: 150 }}
              placeholder="시작시각"
              value={contract.startTime}
              disabled={disable.startTime}
            />
          </InputElement>
        </Wrapper>
        <Wrapper>
          <IconImg draggable={false} src={ClockIcon} />
          <InputElement>
            <InputTitle>종료시간</InputTitle>
            <Input style={{ width: 150 }} placeholder="종료시각" value={contract.endTime} disabled={disable.endTime} />
          </InputElement>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper>
          <IconImg draggable={false} src={CalenderIcon} />
          <InputElement>
            <InputTitle>돌봄장소</InputTitle>
            <Input style={{ width: 320 }} placeholder="주소" value={contract.region} disabled={disable.region} />
          </InputElement>
          <AddressBtn>주소검색</AddressBtn>
        </Wrapper>
      </Row>
      <Row>
        <InputElement>
          <Input
            style={{ width: 450, marginLeft: 45 }}
            placeholder="상세주소"
            value={contract.address}
            disabled={disable.region}
          />
        </InputElement>
      </Row>
      <Row>
        <Wrapper>
          <IconImg draggable={false} src={NoteIcon} />
          <InputElement>
            <InputTitle>돌봄유형</InputTitle>
            <Input
              style={{ width: 450 }}
              placeholder="돌봄유형"
              value={contract.careType}
              disabled={disable.careType}
            />
          </InputElement>
        </Wrapper>
      </Row>
    </>
  )
}

export function ContractConfirm(props) {
  const contract = props.data
  const disable = props.inputDisabled

  return (
    <>
      <Row>
        <Wrapper>
          <IconImg draggable={false} src={UserIcon} />
          <InputElement>
            <InputTitle>작성자</InputTitle>
            <Input style={{ width: 150 }} placeholder="작성자" value={'작성자 by ID'} disabled={disable.parent} />
          </InputElement>
        </Wrapper>
        <Wrapper>
          <IconImg draggable={false} src={UserIcon} />
          <InputElement>
            <InputTitle>선생님</InputTitle>
            <Input style={{ width: 150 }} placeholder="선생님" value={'돌보미 by ID'} disabled={disable.dolbomi} />
          </InputElement>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper>
          <IconImg draggable={false} src={CalenderIcon} />
          <InputElement>
            <InputTitle>시작날짜</InputTitle>
            <Input
              style={{ width: 150 }}
              placeholder="시작날짜"
              value={contract.date[0]}
              disabled={disable.startDate}
            />
          </InputElement>
        </Wrapper>
        <Wrapper>
          <IconImg draggable={false} src={CalenderIcon} />
          <InputElement>
            <InputTitle>종료날짜</InputTitle>
            <Input
              style={{ width: 150 }}
              placeholder="종료날짜"
              value={contract.date[contract.date.length - 1]}
              disabled={disable.endDate}
            />
          </InputElement>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper>
          <IconImg draggable={false} src={ClockIcon} />
          <InputElement>
            <InputTitle>시작시간</InputTitle>
            <Input
              style={{ width: 150 }}
              placeholder="시작시각"
              value={contract.startTime}
              disabled={disable.startTime}
            />
          </InputElement>
        </Wrapper>
        <Wrapper>
          <IconImg draggable={false} src={ClockIcon} />
          <InputElement>
            <InputTitle>종료시간</InputTitle>
            <Input style={{ width: 150 }} placeholder="종료시각" value={contract.endTime} disabled={disable.endTime} />
          </InputElement>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper>
          <IconImg draggable={false} src={CalenderIcon} />
          <InputElement>
            <InputTitle>돌봄장소</InputTitle>
            <Input style={{ width: 450 }} placeholder="주소" value={contract.region} disabled={disable.region} />
          </InputElement>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper>
          <IconImg draggable={false} src={NoteIcon} />
          <InputElement>
            <InputTitle>돌봄유형</InputTitle>
            <Input
              style={{ width: 450 }}
              placeholder="돌봄유형"
              value={contract.careType}
              disabled={disable.careType}
            />
          </InputElement>
        </Wrapper>
      </Row>
    </>
  )
}

const Input = styled('input')(() => ({
  height: '22px',
  padding: 16,
  background: '#FCFCFD',
  borderRadius: 12,
  border: '2px #DFDFE6 solid',
  justifyContent: 'flex-end',
  alignItems: 'center',
  display: 'inline-flex',
  Color: '#87898E',
  fontSize: 16,
  lineHeight: 16,
}))

const InputTitle = styled('div')(() => ({
  color: '#87898E',
  fontSize: 16,
  lineHeight: '16px',
  textAlign: 'left',
  width: '100%',
  marginBottom: 5,
  marginLeft: 3,
}))

const InputElement = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
}))

const IconImg = styled('img')(() => ({
  width: 35,
  height: 35,
  marginTop: 32,
  marginRight: 10,
  draggable: false,
}))

const Row = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom: 20,
}))

const AddressBtn = styled('button')(() => ({
  height: '56px',
  width: '100px',
  marginTop: 22,
  marginLeft: 10,
  border: 'none',
  borderRadius: 12,
  background: 'rgba(93, 90, 136, 0.80)',
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: 'white',
  fontSize: 16,
  '&:hover': {
    opacity: 0.7,
  },
  cursor: 'pointer',
}))
