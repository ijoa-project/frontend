import { styled, Box, Grid } from '@mui/material'

export const Container = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItem: 'center',
}))

export const Profile = styled(Box)(() => ({
  margin: '90px 0px 10px 120px',
  display: 'flex',
  alignItems: 'center',
}))

export const Section = styled(Box)(() => ({
  display: 'inline-block',
  border: '1px solid #d4d2e3',
  width: 500,
  height: 160,
  borderRadius: 15,
  margin: 20,
}))

export const ProfileImg = styled('img')(() => ({
  borderRadius: 9999,
  width: 170,
  height: 170,
}))
