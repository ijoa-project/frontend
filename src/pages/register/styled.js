import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 50px 10vw 40px 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Title = styled.div`
  margin: 30px 0px;
  text-align: center;
  color: #5d5a88;
  font-size: 24px;
  font-weight: 700;
  // Desktop
  @media (min-width: 768px) {
    font-size: 32px;
  }
`

export const Introduce = styled.div`
  margin: 0px 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #c0c0c0;
  color: #8d8ba7;
  // Desktop
  @media (min-width: 768px) {
    margin: 0px 150px;
  }
`
export const Grid = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  // Desktop
  @media (min-width: 768px) {
    margin: 0px 500px 0px 150px;
  }
`

export const SubTitle = styled.div`
  color: #5d5a88;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 0px;
  margin-top: 25px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 14px;
  color: #6c757d;
`

export const Option = styled.button`
  border: ${(props) => (props.selected ? '1px solid #5d5a88' : '1px solid #ddd')};
  border-radius: 50px;
  padding: 10px 13px;
  background-color: ${(props) => (props.selected ? '#5d5a88' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#6c757d')};
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
  // Desktop
  @media (min-width: 768px) {
    padding: 17px 15px;
  }
`

export const Input = styled.input`
  margin-right: -3px;
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
