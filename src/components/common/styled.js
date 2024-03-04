import { styled } from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'

export const Frame = styled.div`
  display: flex;
  padding: 20px 8vw 20px 4vw;
`

export const Title = styled.button`
  font-weight: 900;
  flex: 0.5;
  font-size: 24px;
  border: none;
  background-color: transparent;
  color: #5d5a88;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

export const Contents = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8vw;
  flex: 2;
`

export const LoginBtn = styled.button`
  background-color: #5d5a88;
  padding: 10px;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;
  &:hover {
    opacity: 0.5;
  }
`
export const Menu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #5d5a88;
  font-size: 16px;
`

export const ArrowIcon = styled(IoIosArrowDown)`
  color: #5d5a88;
  margin-left: 3px;
  transform: translateY(3.5px);
`

export const Dropdown = styled.div`
  margin-top: 10px;
  margin-left: -10px;
  position: fixed;
  width: 120px;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 5px;
`
export const Item = styled.button`
  border: none;
  background-color: transparent;
  color: #9795b5;
  display: flex;
  cursor: pointer;
  padding: 5px 10px;
  &:hover {
    opacity: 0.5;
  }
`
