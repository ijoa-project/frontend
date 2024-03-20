import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #ddd;
  // desktop
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const Title = styled.div`
  margin: 20px;
  color: #8d8ba7;

  // Desktop
  @media (min-width: 768px) {
  }
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: nowrap;

  padding: 10px 30px;
`

export const Select = styled.select`
  width: 300px;
  height: 35px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0px 10px;
  outline: none;
  font-size: 14px;
  color: #6c757d;
`

export const Option = styled.option``

export const Input = styled.input`
  width: 280px;
  height: 35px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0px 10px;
  outline: none;
  font-size: 14px;
  color: #6c757d;

  &::placeholder {
    color: #6c757d;
  }

  &:hover {
    border: 2px solid black;
  }

  &:focus {
    border: 2px solid black;
  }
`

export const Label = styled.label`
  font-size: 14px;
  color: #6c757d;
  padding: 0px 5px;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  margin: 20px;
  width: 100px;
  background-color: #5d5a88;
  font-size: 16px;
  align-self: center;
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
`
