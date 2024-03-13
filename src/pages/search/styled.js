import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 140px 10vw 30px 10vw;
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
export const SearchBar = styled.div`
  margin: 30px 0px 15px 0px;
  display: flex;
  gap: 10px;
  // Desktop
  @media (min-width: 768px) {
    gap: 20px;
  }
`
export const Button = styled.button`
  font-weight: 700;
  background-color: ${(props) => (props.active ? '#5d5a88' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#5d5a88')};
  padding: 8px 10px;
  cursor: pointer;
  border: 1px solid #5d5a88;
  border-radius: 10px;
  &:hover {
    background-color: #8d8ba7;
    opacity: 0.7;
  }

  // Desktop
  @media (min-width: 768px) {
    padding: 10px 15px;
    font-size: 16px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  text-align: center;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  // Desktop
  @media (min-width: 768px) {
  }
`
