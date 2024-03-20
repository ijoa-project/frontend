import { Modal, ModalWindow, TitleSection, ModalTitle, ModalCloseButton, ModalDetail } from './Modal'

import { Contract } from './Contract'

export function ContractModal(props) {
  return (
    <Modal open={props.open} handleClose={props.handleClose}>
      <ModalWindow>
        <TitleSection>
          <ModalTitle>돌봄 내역 확인</ModalTitle>
          <ModalCloseButton onClick={props.handleClose} />
        </TitleSection>
        <ModalDetail>
          작성된 돌봄확인서를 확인하여 약속을 확정해주세요! <br /> 아이조아가 약속에 맞춰 알림을 보내드립니다.
        </ModalDetail>
        <Contract />
      </ModalWindow>
    </Modal>
  )
}