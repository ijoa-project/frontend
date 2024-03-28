import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'

export const Frame = styled.div`
  font-family: 'basicFont';
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 94%;
  gap: 20px;
  margin: 20px 10px;
  background-color: white;
  // Desktop
  @media (min-width: 560px) {
    gap: 180px;
  }
  // Desktop
  @media (min-width: 900px) {
    margin: 20px 0px 20px 80px;
    width: 85%;
    gap: 550px;
  }
`

export const Title = styled.button`
  display: 'flex';
  font-family: 'basicFont';
  font-weight: 900;
  margin-top: 5px;
  margin-right: 8px;
  flex: 0.5;
  font-size: 24px;
  border: none;
  background-color: white;
  color: #5d5a88;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  // Desktop
  @media (min-width: 768px) {
    margin-right: 20px;
  }
`

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
`

export const LoginBtn = styled.button`
  font-family: 'basicFont';
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
  font-family: 'basicFont';
  background-color: white;
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
  background-color: white;
  padding: 5px;
`
export const Item = styled.button`
  font-family: 'basicFont';
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
