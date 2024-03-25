import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Header } from 'components/common'
import { Container, Title, Introduce, Box, BtnBox, SubTitle, Button, Grid, Option, Input, Label } from './styled'
import instance from 'api/axios'
import { days, types, times, ages, regularities } from 'assets/data/Form'
import { useMediaQuery } from 'react-responsive'
import useRegister from 'components/register/useRegister'
import { useSelector } from 'react-redux'

function RegisterDolbomi() {
  const { userInfo } = useSelector((state) => state.user)
  const [clickedDay, toggleDay] = useRegister()
  const [clickedTime, toggleTime] = useRegister()
  const [clickedAge, toggleAge] = useRegister()
  const [clickedGender, toggleGender] = useRegister()
  const [clickedRegularity, toggleRegularity] = useRegister()
  const [clickedType, toggleType] = useRegister()

  const isMobile = useMediaQuery({
    query: '(max-width:600px)',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await instance.post(
        '/api/dolbomi/register',
        {
          day: clickedDay,
          time: clickedTime,
          hopeAge: clickedAge,
          hopeGender: clickedGender,
          regularity: clickedRegularity,
          careType: clickedType,
          si: '',
          gu: [],
          title: '',
          content: '',
        },
        {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        }
      )
      console.log(response)
    } catch (error) {
      console.error(error)
    }
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
                <Option selected={clickedDay.includes(day)} key={day} onClick={() => toggleDay(day)}>
                  {day.substring(0, 1)}
                </Option>
              )}
              {isMobile === false && (
                <Option selected={clickedDay.includes(day)} key={day} onClick={() => toggleDay(day)}>
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
              <Input id="times" type="checkbox" value={time} onChange={() => toggleTime(time)} />
              {time}
            </>
          ))}
        </Box>

        <SubTitle>희망 연령</SubTitle>
        <Box>
          {ages.map((age) => (
            <>
              <Input id="ages" type="checkbox" value={age} onChange={() => toggleAge(age)} />
              {age}
            </>
          ))}
        </Box>

        <SubTitle>희망 성별</SubTitle>
        <Box>
          <Input id="genders" type="checkbox" value={'남자'} onChange={() => toggleGender('남자')} />
          남자
          <Input id="genders" type="checkbox" value={'여자'} onChange={() => toggleGender('여자')} />
          여자
        </Box>

        <SubTitle>희망 장소</SubTitle>

        <SubTitle>돌봄 기간</SubTitle>
        <Box>
          {regularities.map((regularity) => (
            <>
              <Input
                id="regularities"
                type="checkbox"
                value={regularity}
                onChange={() => toggleRegularity(regularity)}
              />

              {regularity}
            </>
          ))}
        </Box>

        <SubTitle>돌봄 유형</SubTitle>
        <Box>
          {types.map((type) => (
            <>
              <Input id="types" value={type} type="checkbox" onChange={() => toggleType(type)} />
              {type}
            </>
          ))}
        </Box>

        <SubTitle>제목 작성</SubTitle>
        <Box>
          <Input id="titles" type="text" />
        </Box>

        <SubTitle>내용 작성</SubTitle>
        <Box>
          <Input type="text" />
        </Box>

        <Button type="submit">등록하기</Button>
      </Grid>
    </>
  )
}
export default RegisterDolbomi
