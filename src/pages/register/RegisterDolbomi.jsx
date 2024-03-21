import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Header } from 'components/common'
import { Container, Title, Introduce, Box, SubTitle, Button, Grid, Option, Input, Label } from './styled'
import instance from 'api/instance'
import { days, terms, times, ages, types } from 'assets/data/Form'

function RegisterDolbomi() {
  return (
    <>
      <Header />
      <Container>
        <Title>
          프로필을 먼저 등록하여 <br />
          돌보미로 활동해보세요
        </Title>
      </Container>
      <Introduce>프로필 등록하기</Introduce>

      <Grid>
        <SubTitle>희망 요일</SubTitle>
        <Box>
          {days.map((day, index) => (
            <Option key={index}>{day}</Option>
          ))}
        </Box>

        <SubTitle>희망 시간대</SubTitle>
        <Box>
          {times.map((time, index) => (
            <>
              <Input type="checkbox" />
              <Label htmlFor="checkbox" key={index}>
                {time}
              </Label>
            </>
          ))}
        </Box>

        <SubTitle>희망 연령</SubTitle>
        <Box>
          {ages.map((age, index) => (
            <>
              <Input type="checkbox" />
              <Label htmlFor="checkbox" key={index}>
                {age}
              </Label>
            </>
          ))}
        </Box>

        <SubTitle>희망 성별</SubTitle>
        <Box>
          <Input type="checkbox" />
          <Label htmlFor="checkbox">남자</Label>
          <Input type="checkbox" />
          <Label htmlFor="checkbox">여자</Label>
        </Box>

        <SubTitle>희망 장소</SubTitle>

        <SubTitle>돌봄 기간</SubTitle>
        <Box>
          {terms.map((term, index) => (
            <>
              <Input type="checkbox" />
              <Label htmlFor="checkbox" key={index}>
                {term}
              </Label>
            </>
          ))}
        </Box>

        <SubTitle>돌봄 유형</SubTitle>
        <Box>
          {types.map((type, index) => (
            <>
              <Input type="checkbox" />
              <Label htmlFor="checkbox" key={index}>
                {type}
              </Label>
            </>
          ))}
        </Box>

        <SubTitle>제목 작성</SubTitle>
        <Box>
          <Input type="text" />
        </Box>

        <SubTitle>내용 작성</SubTitle>
        <Box>
          <Input type="text" />
        </Box>

        <Button>등록하기</Button>
      </Grid>
    </>
  )
}
export default RegisterDolbomi
