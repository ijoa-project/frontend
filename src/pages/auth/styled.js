import styled from 'styled-components'

export const AuthButton = styled('button')(() => ({
  width: 270,
  height: 65,
  background: '#5D5A88',
  border: '1px solid #D4D2E3',
  borderRadius: 47.27,
  color: 'white',
  fontSize: 24,
  margin: 10,
  '&:hover': {
    background: '#D4D2E3',
  },
}))

export const StepButton = styled('button')(() => ({
  width: 700,
  height: 70,
  // background: '#D4D2E3',
  background: '#FFFFFF',
  border: '1.3px solid #D4D2E3',
  borderRadius: 100,
  margin: 10,
  color: '#5D5A88',
  fontSize: 21.5,
  fontWeight: 550,
  textAlign: 'left',
  paddingLeft: 40,
  '&:hover': {
    background: '#D4D2E3',
  },
}))
