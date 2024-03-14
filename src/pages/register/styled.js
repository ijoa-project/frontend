import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 50px 10vw 40px 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  // Desktop
  @media (min-width: 768px) {
  }
`
export const Title = styled.div`
  margin: 30px 0px;
  text-align: center;
  color: #5d5a88;
  font-size: 26px;

  font-weight: 700;
  // Desktop
  @media (min-width: 768px) {
    font-size: 32px;
  }
`

export const Introduce = styled.div`
  margin: 0px 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #c0c0c0;
  color: #8d8ba7;
  // Desktop
  @media (min-width: 768px) {
    margin: 100px;
  }
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 25px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  // Desktop
  @media (min-width: 768px) {
    margin: 100px;
  }
`

export const SubTitle = styled.div`
  color: #5d5a88;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 0px;
  margin-top: 25px;
`

export const Option = styled.button`
  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 8.5px;
  background-color: transparent;
  color: #6c757d;
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
`
export const Input = styled.input`
  margin-right: -3px;
`

export const Label = styled.label`
  color: #6c757d;
`
export const Button = styled.button`
  color: #fff;
  background-color: #5d5a88;
  font-weight: 700;
  font-size: 16px;
  padding: 13px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  width: 200px;
  margin: 30px 0px;
  align-self: center;
  &:hover {
    opacity: 50%;
  }
`

// RegisterParent
export const Content = styled.div`
  color: #9795b5;
`
