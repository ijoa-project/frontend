import styled from 'styled-components'

// Search
export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`
export const Thead = styled.th`
  padding: 10px 0px;
  border-bottom: 2px solid #ddd;
  // desktop
  @media (min-width: 768px) {
    padding: 10px;
  }
`
export const Tr = styled.tr`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
`
export const Th = styled.th`
  color: #5d5a88;
  font-size: 14px;

  // desktop
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
export const ThDesktop = styled.th`
  display: none;
  color: #5d5a88;
  /* font-size: 14px; */
  @media (min-width: 768px) {
    display: inline;
  }
`

export const Tbody = styled.tbody`
  padding: 10px 0px;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  // desktop
  @media (min-width: 768px) {
    padding: 10px;
  }
`
export const Td = styled.td`
  display: flex;
  justify-content: space-evenly;
  color: #6c757d;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;

  // desktop
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
export const TdTitle = styled.td`
  display: flex;
  color: #6c757d;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;

  // desktop
  @media (min-width: 768px) {
    font-size: 16px;
    justify-content: space-evenly;
  }
`

export const TdDesktop = styled.td`
  display: none;
  justify-content: space-evenly;
  color: #6c757d;

  //desktop
  @media (min-width: 768px) {
    display: flex;
  }
`

// ConditionalSearch
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ddd;
`
export const ConditionalTab = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0px;
  gap: 15px;
`
export const Button = styled.button`
  border: 1px solid #5d5a88;
  background-color: ${(props) => (props.active ? '#5d5a88' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#5d5a88')};
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #5d5a88;
    color: #fff;
  }
  //desktop
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 10px 25px;
  }
`
export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border: 2px solid #ddd;
  padding: 15px 30px;
`
export const Title = styled.div`
  font-weight: 700;
  color: #6c757d;
  align-self: flex-start;
`
export const Select = styled.div``

export const Option = styled.div``
