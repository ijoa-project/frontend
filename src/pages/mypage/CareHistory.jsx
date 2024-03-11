import React from 'react'
import { Header, Footer } from 'components/common'
import { PageTitle, PageTitleBar } from './styled'
import styled from 'styled-components'

export function CareHistory() {
  return (
    <>
      <Header />
      <div>
        <PageTitle>돌봄내역조회</PageTitle>
        <PageTitleBar />
      </div>
      <div style={{ textAlign: 'center', display: 'flex' }}>
        <CareListTable />
      </div>
      <Footer />
    </>
  )
}

const table_headers = [
  {
    text: '일시',
    value: 'time',
  },
  {
    text: '선생님 성함',
    value: 'applier_name',
  },
  {
    text: '돌봄 종류',
    value: 'care_type',
  },
  {
    text: '지역',
    value: 'region',
  },
  {
    text: '상태',
    value: 'statement',
  },
]

const care_list = [
  {
    applier_name: '정유진',
    time: '2023-07-23',
    region: '서울 중구 장충동',
    care_type: '등하원',
    statement: '진행전',
  },
  {
    applier_name: '김민환',
    time: '2023-07-21',
    region: '인천 서구 주안동',
    care_type: '돌봄',
    statement: '진행중',
  },
  {
    applier_name: '박고운',
    time: '2023-07-20',
    region: '경기 용인 기흥구 언남동',
    care_type: '돌봄',
    statement: '돌봄완료',
  },
]

const CareListTable = () => {
  //const children = props
  const headerKey = table_headers.map((header) => header.value)

  return (
    <Table style={{ margin: '30px 70px', flexDirection: 'column', width: '100%' }}>
      <thead>
        <TableRow>
          {table_headers.map((header) => (
            <TableHeader key={header.text}>{header.text}</TableHeader>
          ))}
        </TableRow>
      </thead>

      <tbody>
        {care_list.map((item, index) => (
          <TableRow key={index}>
            {headerKey.map((key) => (
              <TableColumn key={key + index}>{item[key]}</TableColumn>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  )
}

const TableHeader = styled('th')(() => ({
  color: '#343A40',
  fontSize: 17,
  padding: 8,
  borderBottom: '2.5px #DFDFDF solid',
  fontWeight: 700,
}))

const TableRow = styled('tr')(() => ({
  margin: 0,
  ':first-child': {
    width: '10%',
  },
  ':nth-child(2)': {
    width: '20%',
  },
  ':nth-child(3)': {
    width: '20%',
  },
  ':nth-child(4)': {
    width: '40%',
  },
  ':last-child': {
    width: '10%',
  },
}))

const TableColumn = styled('td')(() => ({
  height: 37,
  fontSize: 16,
  borderBottom: '1px #DFDFDF solid',
}))

const Table = styled('table')(() => ({
  margin: '30px 70px',
}))
