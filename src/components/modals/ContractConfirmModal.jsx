import { Modal, ModalWindow, TitleSection, ModalTitle, ModalCloseButton, ModalDetail } from './Modal'

import { Contract } from './Contract'

export function ContractConfirmModal(props) {
  const contract = {
    careRequestId: '1',
    dolbomiId: '1',
    parentId: '1',
    date: ['2024-01-22', '2024-01-23', '2024-01-24'],
    startTime: '17:00',
    endTime: '19:00',
    day: ['월', '수', '금'],
    regularity: '단기',
    region: '서울 중구 장충동',
    careType: ['놀이돌봄', '교육돌봄'],
    totalCost: '40000',
  }
  const inputDisabled = {
    parent: true,
    dolbomi: true,
    startDate: true,
    endDate: true,
    startTime: true,
    endTime: true,
    region: true,
    careType: true,
  }

  return (
    <Modal open={props.open} handleClose={props.handleClose}>
      <ModalWindow>
        <TitleSection>
          <ModalTitle>돌봄 내역 확인</ModalTitle>
          <ModalCloseButton onClick={props.handleClose} />
        </TitleSection>
        <ModalDetail>지난 돌봄 내역을 확인하실 수 있습니다.</ModalDetail>
        <Contract data={contract} inputDisabled={inputDisabled} />
      </ModalWindow>
    </Modal>
  )
}
