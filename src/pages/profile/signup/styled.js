import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 100px 10vw 30px 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  // Desktop
  @media (min-width: 768px) {
    padding: 16vh 30vw;

    height: 70vh;
  }
`
export const Title = styled.div`
  margin: 30px 0px;
  text-align: center;
  color: #5d5a88;
  font-size: 30px;
  font-weight: 700;
`
export const SignupForm = styled.form`
  margin: 0px 6vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Divider = styled.div`
  display: flex;
  width: 300px;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 20px;
`
export const LabelContent = styled.div`
  margin-top: 2px;
  color: #8d8ba7;
  display: flex;
  width: 100px;
  justify-content: left;
`
export const Content = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 10px;
  width: 100px;
  color: #8d8ba7;
`

export const Label = styled.label`
  color: #8d8ba7;
  margin-right: 15px;
`

export const InputField = styled.input`
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 10px;
  &:focus {
    outline: none;
  }
`
