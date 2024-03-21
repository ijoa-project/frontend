import { Modal, ModalWindow, TitleSection, ModalTitle, ModalCloseButton, ModalDetail } from './Modal'
import styled from 'styled-components'
import UserIcon from 'assets/images/icon_user.png'
import CalenderIcon from 'assets/images/icon_calendar.png'
import ClockIcon from 'assets/images/icon_clock.png'
import NoteIcon from 'assets/images/icon_notepad.png'

export function DetailProfileModal(props) {
  const contract = {
    date: ['2024-01-22', '2024-01-23', '2024-01-24'],
    startTime: '17:00',
    endTime: '19:00',
    day: ['월', '수', '금'],
    regularity: '단기',
    city: '서울',
    gu: '중구',

    careType: ['놀이돌봄', '교육돌봄'],
    totalCost: '40000',
  }
  //   {
  //     "data": {
  //         "profileImg":"example@.com",
  //         "city":"서울",
  //         "gu":"중구",
  //         "dong":"필동",
  //         "content":"안녕하세요. 9월 20일 저녁에 일정이 있어서 이 날 하루만 아이 놀이 돌봄 및 가사 도와주실 분 급구합니다!",
  //         "careType":"등하원돌봄",
  //         "term":"정기돌봄",
  //         "week":"월",
  //         "time":"18시~24시",
  //         "childAge":"7세 이하",
  //         "childGender":"여자",
  //     },

  return (
    <Modal open={props.open} handleClose={props.handleClose}>
      <ModalWindow>
        <TitleSection>
          <ModalTitle>돌봄 내역 확인</ModalTitle>
          <ModalCloseButton onClick={props.handleClose} />
        </TitleSection>
        <ModalDetail>지난 돌봄 내역을 확인하실 수 있습니다.</ModalDetail>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 20 }}>
            <Wrapper>
              <IconImg src={UserIcon} />
              <InputElement>
                <InputTitle>작성자</InputTitle>
                <Input style={{ width: 150 }} placeholder="작성자" value={'작성자 by ID'} disabled={true} />
              </InputElement>
            </Wrapper>
            <Wrapper>
              <IconImg src={UserIcon} />
              <InputElement>
                <InputTitle>선생님</InputTitle>
                <Input style={{ width: 150 }} placeholder="선생님" value={'돌보미 by ID'} disabled={true} />
              </InputElement>
            </Wrapper>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 20 }}>
            <Wrapper>
              <IconImg src={CalenderIcon} />
              <InputElement>
                <InputTitle>시작날짜</InputTitle>
                <Input style={{ width: 150 }} placeholder="시작날짜" value={contract.date[0]} disabled={true} />
              </InputElement>
            </Wrapper>
            <Wrapper>
              <IconImg src={CalenderIcon} />
              <InputElement>
                <InputTitle>종료날짜</InputTitle>
                <Input
                  style={{ width: 150 }}
                  placeholder="종료날짜"
                  value={contract.date[contract.date.length - 1]}
                  disabled={true}
                />
              </InputElement>
            </Wrapper>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 20 }}>
            <Wrapper>
              <IconImg src={ClockIcon} />
              <InputElement>
                <InputTitle>시작시간</InputTitle>
                <Input style={{ width: 150 }} placeholder="시작시각" value={contract.startTime} disabled={true} />
              </InputElement>
            </Wrapper>
            <Wrapper>
              <IconImg src={ClockIcon} />
              <InputElement>
                <InputTitle>종료시간</InputTitle>
                <Input style={{ width: 150 }} placeholder="종료시각" value={contract.endTime} disabled={true} />
              </InputElement>
            </Wrapper>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 20 }}>
            <Wrapper>
              <IconImg src={CalenderIcon} />
              <InputElement>
                <InputTitle>돌봄장소</InputTitle>
                <Input style={{ width: 450 }} placeholder="주소" value={contract.region} disabled={true} />
              </InputElement>
            </Wrapper>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 20 }}>
            <Wrapper>
              <IconImg src={NoteIcon} />
              <InputElement>
                <InputTitle>돌봄유형</InputTitle>
                <Input style={{ width: 450 }} placeholder="돌봄유형" value={contract.careType} disabled={true} />
              </InputElement>
            </Wrapper>
          </div>
        </div>
      </ModalWindow>
    </Modal>
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
}))
