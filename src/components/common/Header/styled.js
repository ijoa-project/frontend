import { styled, Button, Grid } from '@mui/material'

export const Frame = styled(Grid)(() => ({
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '26px 30px 0px 30px',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
}))

export const Title = styled(Grid)(() => ({
  fontWeight: '700',
  marginLeft: '80px',
  marginBottom: 7.5,
  textAlign: 'center',
  fontSize: 22,
  color: '#5D5A88',
  '&:hover': {
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  '&:active': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
}))

export const Contents = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}))

export const LoginBtn = styled(Button)(() => ({
  textAlign: 'center',
  margin: '-8px 20px 0px 12px',
  fontSize: 16,
  fontWeight: 600,
  borderRadius: '40px',
  backgroundColor: '#5D5A88',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#8D8BA7',
  },
}))
