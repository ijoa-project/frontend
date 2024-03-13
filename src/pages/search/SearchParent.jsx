import { Header } from 'components/common'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Title, SearchBar, Button, SearchContainer } from './styled'
import { Search, ConditionalSearch } from 'components/search'

function SearchDolbomi() {
  const [searchAll, setSearchAll] = useState(true)

  const onClickSearch = (bar) => {
    setSearchAll(bar)
  }

  return (
    <>
      <Header />
      <Container>
        <Title>
          내게 딱 맞는 요청을 발견하고 <br />
          돌봄을 시작해보세요
        </Title>
        <SearchBar>
          <Button onClick={() => onClickSearch(true)} active={searchAll === true}>
            전체보기
          </Button>
          <Button onClick={() => onClickSearch(false)} active={searchAll === false}>
            조건검색
          </Button>
        </SearchBar>

        {searchAll && (
          <>
            <Search />
          </>
        )}
        {searchAll === false && (
          <>
            <ConditionalSearch />
            <Search />
          </>
        )}
      </Container>
    </>
  )
}

export default SearchDolbomi
