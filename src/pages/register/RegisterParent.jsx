import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Header } from 'components/common'
import { Container, Title, Content, Box, SubTitle, Button, Grid, Option, Select, SelectOption } from './styled'
import instance from 'api/instance'
import RegisterParentForm from 'components/register/RegisterParentForm'

function RegisterParent() {
  return (
    <>
      <Header />
      <Container>
        <Title>
          원하시는 돌봄 서비스를 <br />
          입력해주세요.
        </Title>
        <Content>아이조아가 최적의 선생님을 찾아드립니다!</Content>
      </Container>
      <Grid>
        <RegisterParentForm />
      </Grid>
    </>
  )
}
export default RegisterParent
