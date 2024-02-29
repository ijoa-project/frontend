import { styled } from 'styled-components'

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   padding: 100px 15vw 30px 15vw;

//   // Desktop
//   @media (min-width: 768px) {
//     justify-content: space-around;
//     flex-direction: row;
//   }
// `

export const Frame = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 30px 0px 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  zindex: 999;
`

export const Title = styled.div`
  font-weight: 700;
  margin-left: 80px;
  margin-bottom: 7.5px;
  text-align: center;
  font-size: 22px;
  color: #5d5a88;
  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
  &:active {
    background-color: transparent;
    box-shadow: none;
  }
`

export const Contents = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const LoginBtn = styled.button`
  text-align: center;
  margin: -8px 20px 0px 12px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 40px;
  background-color: #5D5A88;
  color: #fff;
  &:hover {
    background-color: #8D8BA7;
  },
`
