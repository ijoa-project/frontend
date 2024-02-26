import { styled, Grid } from '@mui/material'

export const Container = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '85px 200px 10px 200px',
}))

export const Section = styled(Grid)(() => ({
  textAlign: 'center',
  padding: '100px 30px',
  marginRight: '30px',
}))

export const SubTitle = styled(Grid)(() => ({
  color: '#8d8ba7',
  fontSize: '16px',
  fontWeight: 700,
  margin: '100px 0px 20px 0px',
}))

export const Title = styled(Grid)(() => ({
  color: '#5d5a88',
  fontSize: '28px',
  fontWeight: '700',
  marginBottom: '3px',
}))

export const Content = styled(Grid)(() => ({
  color: '#9795B5',
  fontSize: '14px',
  marginTop: '20px',
}))
