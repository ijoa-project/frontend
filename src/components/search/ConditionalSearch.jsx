import { useState } from 'react'
import { Container, ConditionalTab, Button, TabContent, Title, Select, Option } from './styled'

export const ConditionalSearch = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  const onClickTab = (tab) => {
    setActiveTab(tab)
  }

  const si = ['서울', '경기', '인천']
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
                {si.map((si, index) => (
                  <Option key={index}>{si}</Option>
                ))}
              </Select>
              <Title>구 / 군</Title>
            </>
          )}
          {activeTab === 'tab2' && (
            <>
              <div>탭2</div>
            </>
          )}
          {activeTab === 'tab3' && (
            <>
              <div>탭3</div>
            </>
          )}
        </TabContent>
      </Container>
    </>
  )
}
