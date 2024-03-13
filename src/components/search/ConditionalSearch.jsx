import { useState } from 'react'
import { Container, ConditionalTab, Button, TabContent, Title, Select, Option } from './styled'
import Locations from 'assets/data/Locations'
import Days from 'assets/data/Days'

export const ConditionalSearch = () => {
  const [activeTab, setActiveTab] = useState('tab1')
  const [activeGu, setActiveGu] = useState(Locations.서울특별시)
  const [activeSi, setActiveSi] = useState()

  const onClickTab = (tab) => {
    setActiveTab(tab)
  }
  const onClickOption = (si) => {
    setActiveSi(si)
    setActiveGu(Locations[si])
  }
  const onClickGu = (gu) => {
    setActiveGu(gu)
  }

  return (
    <>
      <Container>
        <ConditionalTab>
          <Button onClick={() => onClickTab('tab1')} active={activeTab == 'tab1'}>
            지역
          </Button>
          <Button onClick={() => onClickTab('tab2')} active={activeTab == 'tab2'}>
            돌봄 내용
          </Button>
          <Button onClick={() => onClickTab('tab3')} active={activeTab == 'tab3'}>
            일정
          </Button>
        </ConditionalTab>
        <TabContent>
          {activeTab === 'tab1' && (
            <>
              <Title>시 / 도</Title>
              <Select>
                {Object.keys(Locations).map((si) => (
                  <Option onClick={() => onClickOption(si)} active={activeSi == si} key={si} value={si}>
                    {si}
                  </Option>
                ))}
              </Select>
              <Title>구 / 군</Title>

              <Select>
                {activeGu.map((gu, index) => (
                  <Option key={index} value={gu}>
                    {gu}
                  </Option>
                ))}
              </Select>
            </>
          )}
          {activeTab === 'tab2' && (
            <>
              <Select>
                <Option>놀이 돌봄</Option>
                <Option>등하원 돌봄</Option>
                <Option>교육 돌봄</Option>
                <Option>가사 돌봄</Option>
              </Select>
            </>
          )}
          {activeTab === 'tab3' && (
            <>
              <Title>긴급 / 단기 / 정기</Title>
              <Select>
                <Option>긴급 돌봄</Option>
                <Option>비정기 돌봄</Option>
                <Option>정기 돌봄</Option>
              </Select>

              <Title>요일</Title>
              <Select>
                {Days.map((day, index) => (
                  <Option key={index} value={day}>
                    {day}
                  </Option>
                ))}
              </Select>
              <Title>시간</Title>
              <Select>
                <Option>6시~12시</Option>
                <Option>12시~18시</Option>
                <Option>18시~24시</Option>
              </Select>
            </>
          )}
        </TabContent>
      </Container>
    </>
  )
}
