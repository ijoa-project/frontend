import {
  HistoryBox,
  Modal,
  ModalCloseButton,
  ModalTitle,
  SelectBox,
  CareHistory,
  ModalWindow,
  TypeSection,
  CareDetail,
  CostSection,
  CareType,
  CareCost,
  TitleSection,
  ModalDetail,
} from './Modal'

export function PaylistModal(props) {
  const nonpaylist = [
    {
      contractId: 1,
      careType: ['교육돌봄', '놀이돌봄'],
      region: '서울시 중구',
      startDate: '2024/03/14',
      endDate: '2024/03/23',
      totalTime: '16',
      totalCost: '160000',
    },
    {
      contractId: 2,
      careType: ['교육돌봄', '놀이돌봄'],
      region: '서울시 종로구',
      startDate: '2024/03/15',
      endDate: '2024/03/28',
      totalTime: '16',
      totalCost: '320000',
    },
  ]

  return (
    <>
      <Modal open={props.open} handleClose={props.handleClose}>
        <ModalWindow>
          <TitleSection>
            <ModalTitle>활동비 정산 내역 조회</ModalTitle>
            <ModalCloseButton onClick={props.handleClose} />
          </TitleSection>
          <ModalDetail>
            활동비는 돌봄 활동 종료 후 학부모님이
            <br /> 활동에 대한 별점 평가를 등록하신 후 정산됩니다.
          </ModalDetail>
          <div>
            <SelectBox>기간선택</SelectBox>
            <HistoryBox>
              {nonpaylist.map((item, index) => (
                <CareHistory key={index}>
                  <TypeSection>
                    <CareType>
                      {item.careType.map((item, index) => (
                        <text key={index}>{item} </text>
                      ))}
                    </CareType>
                    <CareDetail>
                      {item.region} | {item.startDate}
                    </CareDetail>
                  </TypeSection>
                  <CostSection>
                    <CareCost>{item.totalCost}</CareCost>
                  </CostSection>
                </CareHistory>
              ))}
            </HistoryBox>
          </div>
        </ModalWindow>
      </Modal>
    </>
  )
}
