import React, { useState, useRef } from 'react'
import styled from 'styled-components'

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
          <ModalWindow>{props.children}</ModalWindow>
        </ModalContainer>
      )}
    </>
  )
}

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
  background: 'rgba(0, 0, 0, 0.3)',
}))

const ModalWindow = styled('div')(() => ({
  margin: '70px 20vw',
  width: '60vw',
  borderRadius: 50,
  padding: 30,
  background: '#FFFFFF',
}))
