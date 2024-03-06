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

export const PageTitle = styled('div')(() => ({
  color: '#5D5A88',
  marginLeft: 70,
  fontSize: 20,
  fontWeight: '700',
}))

export const PageTitleBar = styled('div')(() => ({
  display: 'flex',
  margin: '10px 70px 10px 70px',
  height: 0,
  border: '0.7px #C0C0C0 solid',
}))

export const PageDetail = styled('div')(() => ({
  color: '#9795B5',
  fontSize: 17,
  fontWeight: 400,
  lineHeight: '30px',
  margin: 30,
}))

export const ConfirmButton = styled('button')(() => ({
  backgroundColor: '#5D5A88',
  width: 140,
  height: 55,
  borderRadius: 47.27,
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FFFFFF',
  fontSize: 22,
  border: 'none',
}))

export const TextWrap = styled('div')(() => ({
  textAlign: 'left',
  margin: '10px 70px 10px 70px',
}))

export const TextHighlight = styled('span')(() => ({
  color: '#5D5A88',
  fontSize: 23,
  fontWeight: '650',
}))

export const Text = styled('div')(() => ({
  padding: 10,
  color: '#8D8BA7',
  fontSize: 21,
  fontWeight: '400',
}))
