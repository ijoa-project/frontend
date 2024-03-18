// mui 사용 없이 modal 창을 구현했습니다.
// <Model open={open} handelClose={modalClose}> ~contents~ </Modal> 형태로 사용

import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import closeButton from 'assets/images/icon_close.png'

export function Modal(props) {
  const [modalOpen, setModalOpen] = useState(props.open)
  const modalBackground = useRef()

  return (
    <>
      {props.open && (
        <ModalContainer
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              props.handleClose(false)
            }
          }}
        >
          {props.children}
        </ModalContainer>
      )}
    </>
  )
}

// Styled Components

const ModalContainer = styled('div')(() => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContenet: 'center',
  alignItems: 'center',
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.4)',
}))

export const ModalWindow = styled('div')(() => ({
  margin: '70px 25vw',
  width: '50vw',
  borderRadius: 25,
  padding: 30,
  background: '#FFFFFF',
}))

export const ModalTitle = styled('div')(() => ({
  color: '#5D5A88',
  fontSize: 23,
  lineHeight: '36px',
  textAlign: 'left',
  paddingLeft: 30,
}))

export const TitleSection = styled('div')(() => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'inline-flex',
  width: '100%',
}))

export const ModalDetail = styled('div')(() => ({
  color: '#9795B5',
  fontSize: 18,
  lineHeight: '30px',
  margin: 30,
}))

export const ImgButtonWrapper = styled('button')(() => ({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
}))

export const ModalCloseButton = (props) => {
  return (
    <ImgButtonWrapper onClick={props.onClick}>
      <img style={{ width: 28, height: 28 }} src={closeButton} alt="close" />
    </ImgButtonWrapper>
  )
}

export const SelectBox = styled('div')(() => ({
  // width: 480,
  width: '90%',
  height: 55,
  borderRadius: 12,
  border: '2px #DFDFE6 solid',
  textAlign: 'left',
  position: 'relative',
  alignItems: 'center',
  display: 'inline-flex',
  margin: '30px 0px',
  paddingLeft: 15,
}))

export const HistoryBox = styled('div')(() => ({
  padding: '20px',
}))

export const CareHistory = styled('div')(() => ({
  borderRadius: 35,
  height: 50,
  width: '90%',
  border: '2px #DFDFE6 solid',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'inline-flex',
  padding: '10px 30px',
  marginBottom: '15px',
  '&:hover': {
    background: '#D4D2E3',
    borderColor: '#D4D2E3',
  },
}))

export const TypeSection = styled('div')(() => ({
  textAlign: 'left',
}))

export const CareType = styled('div')(() => ({
  fontSize: 18,
}))

export const CareDetail = styled('div')(() => ({
  fontSize: 14,
  color: 'gray',
  marginTop: 4,
}))

export const CostSection = styled('div')(() => ({
  display: 'inline-flex',
}))

export const CareCost = (props) => {
  return (
    <>
      <div style={{ fontSize: 18 }}>{props.children}</div>
      <div style={{ color: 'gray', marginLeft: 5 }}>원</div>
    </>
  )
}
