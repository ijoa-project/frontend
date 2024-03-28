import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Header } from 'components/common'
import { Container, Title, Introduce, Box, SubTitle, Button, Grid, Option, Input, Textarea } from './styled'
import instance from 'api/axios'
import { days, types, times, ages, regularities } from 'assets/data/Form'
import { useMediaQuery } from 'react-responsive'
import useRegister from 'components/register/useRegister'
import { useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
import locations from 'assets/data/Locations'
import Select from 'react-select'

function RegisterDolbomi() {
  const { userInfo } = useSelector((state) => state.user)
  const [clickedDay, toggleDay] = useRegister()
  const [clickedTime, toggleTime] = useRegister()
  const [clickedAge, toggleAge] = useRegister()
  const [clickedGender, toggleGender] = useRegister()
  const [clickedRegularity, toggleRegularity] = useRegister()
  const [clickedType, toggleType] = useRegister()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [activeSi, setActiveSi] = useState('서울특별시')
  const [activeGu, setActiveGu] = useState([])

  const isMobile = useMediaQuery({
    query: '(max-width:600px)',
  })
  const siOptions = Object.keys(locations).map((si) => ({ label: si, value: si }))

  const guOptions = locations[activeSi].map((gu) => ({ label: gu, value: gu }))

  const handleSelectChange = (gu) => {
    setActiveGu(gu)
  }

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
          si: activeSi,
          gu: activeGu.value,
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: `${userInfo.token}`,
          },
        }
      )

      console.log(response)
      if (response.status == '200') {
        window.alert('지원서가 등록되었습니다.')
      }
    } catch (error) {
      console.error(error)
    }
  }

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
        <Box>
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
        </Box>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginRight: '250px' }}>
          <Select
            defaultValue={siOptions[0]}
            options={siOptions}
            name="si"
            value={activeSi.value}
            onChange={(e) => setActiveSi(e.value)}
          />

          <Select
            isMulti
            defaultValue={[]}
            name="gu"
            options={guOptions}
            value={activeGu}
            onChange={handleSelectChange}
            placeholder={'희망하는 구를 선택해주세요'}
          />
        </div>
        <SubTitle>돌봄 기간</SubTitle>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          {regularities.map((regularity) => (
            <>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Input
                  id="regularities"
                  type="checkbox"
                  value={regularity}
                  onChange={() => toggleRegularity(regularity)}
                />
                {regularity}
              </div>
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
        {isMobile === true && (
          <>
            <SubTitle>제목 작성</SubTitle>
            <Box>
              <TextField id="title" value={title} fullWidth size="small" onChange={(e) => setTitle(e.target.value)} />
            </Box>
            <SubTitle>내용 작성</SubTitle>
            <Box>
              <TextField
                id="content"
                value={content}
                rows={8}
                multiline
                fullWidth
                onChange={(e) => setContent(e.target.value)}
              />
            </Box>
          </>
        )}
        {isMobile === false && (
          <>
            <SubTitle>제목 작성</SubTitle>
            <Box>
              <TextField id="title" value={title} fullWidth size="small" onChange={(e) => setTitle(e.target.value)} />
            </Box>
            <SubTitle>내용 작성</SubTitle>
            <Box>
              <TextField
                id="content"
                value={content}
                rows={8}
                multiline
                fullWidth
                onChange={(e) => setContent(e.target.value)}
              />
            </Box>
          </>
        )}

        <Button type="submit">등록하기</Button>
      </Grid>
    </>
  )
}
export default RegisterDolbomi
