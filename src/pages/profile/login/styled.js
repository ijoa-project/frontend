import { styled, Button, Grid } from '@mui/material'

export const Container = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
}))

export const Title = styled(Grid)(() => ({
  textAlign: 'center',
  color: '#5D5A88',
  fontSize: 36,
  fontFamily: 'DM Sans',
  fontWeight: '700',
  lineHeight: 5,
}))

export const IDField = styled('input')(() => ({
  width: 450,
  height: 30,
  display: 'flex',
  borderRadius: '12px',
  border: '2px solid #ddd',
  padding: '10px 15px',
  justifyContent: 'space-between',
  margin: '10px 0px 40px 0px',
  '&:focus': {
    outline: 'none',
  },
}))

export const PWField = styled('input')(() => ({
  width: 450,
  height: 30,
  display: 'flex',
  borderRadius: '12px',
  border: '2px solid #ddd',
  padding: '10px 15px',
  justifyContent: 'space-between',
  margin: '10px 0px',
  alignItems: 'center',
  color: 'black',
  fontSize: 14,
  '&:focus': {
    outline: 'none',
  },
}))

export const LoginButton = styled(Button)(() => ({
  background: '#5D5A88',
  color: 'white',
  fontWeight: '700',
  fontSize: '18px',
  width: '200px',
  height: '45px',
  borderRadius: '40px',
  margin: '30px 0px',
  '&:hover': {
    background: '#5D5A88',
  },
}))
