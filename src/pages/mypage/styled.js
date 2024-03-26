import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Desktop
  @media (min-width: 768px) {
    margin: 20px 150px;
  }
`

export const Profile = styled.div`
  padding: 100px 0px 20px 0px;
  margin: 0px 20px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
  // Desktop
  @media (min-width: 768px) {
    margin: 0px 150px;
    padding: 200px 0px 20px 0px;
  }
`

export const Section = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #d4d2e3',
  borderRadius: 15,
  margin: 20,
}))

export const Button = styled('button')(() => ({
  fontSize: 16,
  margin: 10,
  color: 'gray',
  alignItems: 'center',
}))

export const SectionTitle = styled('div')(() => ({
  color: '#5d5a88',
  fontWeight: 700,
  paddingTop: 20,
  paddingLeft: 30,
  paddingBottom: 10,
  textAlign: 'left',
}))

export const List = styled('div')(() => ({
  paddingBottom: 17,
  textAlign: 'left',
  // justifyContent: 'start',
}))

export const ListItem = styled('div')(() => ({
  lineHeight: '30px',
  marginLeft: 35,
  cursor: 'pointer',
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
