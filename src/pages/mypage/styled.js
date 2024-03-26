import { styled } from 'styled-components'

export const Profile = styled.div`
  padding: 100px 0px 20px 0px;
  margin: 0px 25px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  // Desktop
  @media (min-width: 768px) {
    margin: 0px 200px;
    padding: 150px 50px 20px 0px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Desktop
  @media (min-width: 768px) {
    margin: 20px 200px;
  }
`

export const Section = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #d4d2e3',
  borderRadius: 15,
  margin: 20,
}))

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  // Desktop
  @media (min-width: 768px) {
    gap: 20px;
  }
`

export const Button = styled.button`
  margin: 35px 0px 0px 0px;
  border: none;
  background-color: #5d5a88;
  border-radius: 10px;
  color: white;
  width: 90px;
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
  // Desktop
  @media (min-width: 768px) {
    width: 150px;
    padding: 10px 0px;
  }
`

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
