import { useState } from 'react'
import { Table, Thead, Tr, Th, Tbody, Td, TdDesktop, ThDesktop, TdTitle } from './styled'
import { SearchContainer } from 'pages/search/styled'
import { DetailProfileModal } from 'components/modals'

export const Search = () => {
  const user = [
    {
      profile: '김혜연',
      name: '김혜연',
      address: '서울시 중구',
      title: '제목입니다',
      schedule: '월, 수, 금',
      rating: '3.5',
    },
    {
      profile: '김민환',
      name: '김민환',
      address: '서울시 중구',
      title: '아이돌봄구합니다',
      schedule: '월, 수, 금',
      rating: '3.5',
    },
  ]
  const [modalOpen, setModalOpen] = useState(false)

  const onClickProfile = () => setModalOpen(true)
  const onClickClose = () => setModalOpen(false)
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <ThDesktop width="10%">Profile</ThDesktop>
            <Th width="15%">Name</Th>
            <Th width="20%">Address</Th>
            <Th width="20%">Title</Th>
            <Th width="20%">Schedule</Th>
            <Th width="10%">Rating</Th>
          </Tr>
        </Thead>

        {user.map((user) => (
          <Tbody key={user.name} onClick={onClickProfile}>
            <TdDesktop width="10%">{user.profile}</TdDesktop>
            <Td width="15%">{user.name}</Td>
            <Td width="20%">{user.address}</Td>
            <TdTitle width="20%">{user.title}</TdTitle>
            <Td width="20%">{user.schedule}</Td>
            <Td width="10%">{user.rating}</Td>
          </Tbody>
        ))}
      </Table>
      <DetailProfileModal open={modalOpen} handleClose={onClickClose} />
    </>
  )
}
