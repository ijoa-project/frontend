import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px 15vw 30px 15vw;

  // Desktop
  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    padding: 160px 15vw 30px 15vw;
    gap: 15px;
  }
`

export const Section_first = styled.div`
  padding: 50px 0px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Section_second = styled.div`
  padding: 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Img = styled.img`
  width: 100%;
  border-radius: 30px;

  // Desktop
  @media (min-width: 768px) {
    width: 40vw;
    padding: 50px 0px;
  }
`

export const SubTitle = styled.div`
  color: #8d8ba7;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 30px;
`

export const Title = styled.div`
  color: #5d5a88;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
`

export const Content = styled.div`
  color: #9795b5;
  font-size: 16px;
  margin-top: 30px;
  line-height: 1.3;
`
