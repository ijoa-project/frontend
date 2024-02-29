import { styled, Box, Grid, ButtonBase, ListItemText } from '@mui/material'

export const Container = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  alignItem: 'center',
}))

export const Profile = styled(Box)(() => ({
  margin: '150px 120px 10px 120px',
  display: 'flex',
  alignItems: 'flex-end',
  // justifyContent: 'space-between',
}))

export const Section = styled(Box)(() => ({
  display: 'inline-block',
  border: '1px solid #d4d2e3',
  width: 350,
  height: 160,
  borderRadius: 15,
  margin: 20,
}))

export const ProfileImg = styled('img')(() => ({
  borderRadius: 9999,
  width: 170,
  height: 170,
}))

export const Button = styled(ButtonBase)(() => ({
  fontSize: 16,
  margin: 10,
  color: 'gray',
  alignItems: 'center',
}))

export const SectionTitle = styled(Box)(() => ({
  color: '#5d5a88',
  fontWeight: 700,
  paddingTop: 20,
  paddingLeft: 30,
  paddingBottom: 10,
  textAlign: 'left',
}))

export const List = styled(Grid)(() => ({
  paddingBottom: 17,
  textAlign: 'left',
  // justifyContent: 'start',
}))

export const ListItem = styled(Grid)(() => ({
  lineHeight: '30px',
  marginLeft: 35,
  cursor: 'pointer',
}))
