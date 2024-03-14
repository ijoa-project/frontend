import React, { useState } from 'react'
import { Container, Title, Grid, Select, Option, Input, Label, Box, Button } from './styled'
import { times, ages, days, types, terms } from 'assets/data/Form'

function RegisterParentForm() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <>
      <Container>
        <Title>돌봄 서비스 신청하기</Title>
        <Grid>
          <Box>
            <Label>시작 날짜를 선택해주세요</Label>
            <Input type="date" />
          </Box>
          <Box>
            <Label>종료 날짜를 선택해주세요</Label>
            <Input type="date" />
          </Box>
          <Box>
            <Select>
              <Option disabled selected>
                돌봄 시간을 선택하세요
              </Option>
              {times.map((time, index) => (
                <Option key={index}>{time}</Option>
              ))}
            </Select>
          </Box>
          <Box>
            <Select>
              <Option disabled selected>
                돌봄 유형을 선택하세요
              </Option>

              {types.map((type, index) => (
                <Option key={index}>{type}</Option>
              ))}
            </Select>
          </Box>
          <Box>
            <Select>
              <Option disabled selected>
                자녀의 연령을 선택하세요
              </Option>
              {ages.map((age, index) => (
                <Option key={index}>{age}</Option>
              ))}
            </Select>
          </Box>
          <Box>
            <Select>
              <Option disabled selected>
                돌봄 기간을 선택해주세요
              </Option>
              {terms.map((term, index) => (
                <Option key={index}>{term}</Option>
              ))}
            </Select>
          </Box>
          <Box>
            <Input type="text" placeholder="돌봄 장소를 입력해주세요" />
          </Box>
          <Box>
            <Input type="text" placeholder="자녀의 성별을 입력해주세요" />
          </Box>
          <Box>
            <Input type="text" placeholder="자녀의 이름을 입력해주세요" />
          </Box>
          <Box>
            <Input type="number" placeholder="시급을 작성해주세요" />
          </Box>
          <Box>
            <Input type="text" placeholder="제목" />
          </Box>
          <Box>
            <Input type="text" placeholder="내용" />
          </Box>
        </Grid>
        <Button>등록</Button>
        {/* <button>수정</button> */}
      </Container>
    </>
  )
}

export default RegisterParentForm
