import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Header } from 'components/common'
import { Container, Title, Introduce, Box, BtnBox, SubTitle, Button, Grid, Option, Input, Label } from './styled'
import instance from 'api/instance'
import { days, terms, times, ages, types } from 'assets/data/Form'
import { useMediaQuery } from 'react-responsive'

function RegisterDolbomi() {
  const [clickedDays, setClickedDays] = useState([])
  const [clickedTimes, setClickedTimes] = useState([])
  const [hopeAge, setHopeAge] = useState([])
  const [hopeGender, setHopeGender] = useState([])
  const [regularity, setRegularity] = useState([])

  const isMobile = useMediaQuery({
    query: '(max-width:600px)',
  })

  const onClickDay = (day) => {
    setClickedDays((currentSetDay) => {
      if (currentSetDay.includes(day)) {
        return currentSetDay.filter((d) => d !== day)
      } else {
        return [...currentSetDay, day]
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(clickedDays)
    console.log(clickedTimes)
    // try {
    //   const response = await instance.post('', {
    //     day,
    //     time,
    //     hopeAge,
    //     hopeGender,
    //     regularity,
    //   })
    //   console.log(response)
    // } catch (error) {
    //   console.error(error)
    // }
  }
  // {
  //   "day":["월","화","수","목","금"],
  //   "time":["0시~6시","6시~12시"]
  //   "hopeAge":["7세이하","13세이하"]
  //   "hopeGender":["남자"],
  //   "regularity":["정기돌봄"],
  //   "si":"서울시",
  //   "gu":["양천구","중구"],
  //   "careType":["놀이돌봄","교육돌봄"],
  //   "title":"안녕하세요. 오은영입니다~",
  //   "content":"상세한 내용 작성 ex) 경력 or 자격증 등등...",
  // }

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

      <Grid onSubmit={handleSubmit}>
        <SubTitle>희망 요일</SubTitle>
        <BtnBox>
          {days.map((day) => (
            <>
              {isMobile === true && (
                <Option selected={clickedDays.includes(day)} key={day} onClick={() => onClickDay(day)}>
                  {day.substring(0, 1)}
                </Option>
              )}
              {isMobile === false && (
                <Option selected={clickedDays.includes(day)} key={day} onClick={() => onClickDay(day)}>
                  {day}
                </Option>
              )}
            </>
          ))}
        </BtnBox>

        <SubTitle>희망 시간대</SubTitle>
        <Box>
          {times.map((time) => (
            <>
              <Input id="times" type="checkbox" value={time} onChange={(e) => setClickedTimes(e.target.value)} />
              {time}
            </>
          ))}
        </Box>

        {/* <SubTitle>희망 연령</SubTitle>
        <Box>
          {ages.map((age, index) => (
            <>
              <Input type="checkbox" onChange={(e) => setHopeAge(e.target.value)} />
              <Label htmlFor="checkbox" key={index}>
                {age}
              </Label>
            </>
          ))}
        </Box>

        <SubTitle>희망 성별</SubTitle>
        <Box>
          <Input type="checkbox" onChange={(e) => setHopeGender(e.target.value)} />
          <Label htmlFor="checkbox">남자</Label>
          <Input type="checkbox" onChange={(e) => setHopeGender(e.target.value)} />
          <Label htmlFor="checkbox">여자</Label>
        </Box>

        <SubTitle>희망 장소</SubTitle>

        <SubTitle>돌봄 기간</SubTitle>
        <Box>
          {terms.map((term, index) => (
            <>
              <Input type="checkbox" onChange={(e) => setRegularity(e.target.value)} />
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
        </Box> */}

        <Button type="submit">등록하기</Button>
      </Grid>
    </>
  )
}
export default RegisterDolbomi
