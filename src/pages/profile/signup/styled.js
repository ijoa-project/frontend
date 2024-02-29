import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 120px 10vw 30px 10vw;
  display: flex;

  // Desktop
  @media (min-width: 768px) {
    padding: 16vh 30vw;
    background-color: #5d5a88;
    height: 70vh;
  }
`
export const Title = styled.div`
  margin: 30px 0px;
  text-align: center;
  color: #5d5a88;
  font-size: 32px;
  font-weight: 700;
`
