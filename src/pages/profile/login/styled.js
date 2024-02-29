import { styled } from 'styled-components'

export const Body = styled.div`
  padding: 120px 10vw 30px 10vw;
  display: flex;

  // Desktop
  @media (min-width: 768px) {
    padding: 16vh 30vw;
    background-color: #5d5a88;
    height: 70vh;
  }
`
export const Container = styled.div`
  background-color: #fff;
  flex-direction: column;
  width: 100%;
  text-align: center;

  // Dedktop
  @media (min-width: 768px) {
    padding: 20px 40px;
    border-radius: 30px;
  }
`

export const Title = styled.div`
  margin: 30px 0px;
  text-align: center;
  color: #5d5a88;
  font-size: 32px;
  font-weight: 700;
`

export const Option = styled.div`
  display: 'flex';
  justify-content: flex-end;
  text-align: right;
`
export const OptionTxt = styled.div`
  color: #8d8ba7;
`

export const SignupBtn = styled.button`
  margin-bottom: 20px;
  color: #b87514;
  padding: 2px 0px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 16px;
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Content = styled.div`
  color: #8d8ba7;
  margin-bottom: 8px;
  text-align: left;
`

export const InputField = styled.input`
  height: 25px;
  border-radius: 12px;
  border: 2px solid #ddd;
  padding: 10px 15px;
  margin-bottom: 30px;
  &:focus {
    outline: none;
  }
`

export const LoginBtn = styled.button`
  margin: 40px 0px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  background-color: #5d5a88;
  padding: 15px 80px;
  cursor: pointer;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #8d8ba7;
  }
`
