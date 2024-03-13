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
          우리 아이를 믿고 맡길 <br />
          최적의 선생님을 찾아보세요!
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
