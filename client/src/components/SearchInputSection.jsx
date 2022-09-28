import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import CommonInput from 'components/CommonInput'
import CommonButton from 'components/CommonButton'
import { SearchContextStore } from 'store/searchStore'
import ResultItem from './ResultItem'

const SearchInputSection = () => {
  const { searchText, searchResult } = useContext(SearchContextStore)
  const [currentPage, setCurrentPage] = useState(0)

  const keyHandler = event => {
    if (searchText === '') return
    if (event.code === 'ArrowDown') {
      currentPage >= searchResult.length - 1 ? setCurrentPage(0) : setCurrentPage(prev => prev + 1)
    }
    if (event.code === 'ArrowUp') {
      currentPage === 0 ? setCurrentPage(searchResult.length - 1) : setCurrentPage(prev => prev - 1)
    }
  }

  useEffect(() => {
    searchText === '' && setCurrentPage(0)
  }, [searchText])

  return (
    <>
      <SearchInputWrapper onKeyDown={keyHandler} tabIndex={0}>
        <CommonInput />
        <CommonButton>검색</CommonButton>
      </SearchInputWrapper>
      {searchText && (
        <ResultContainer>
          {searchResult.length === 0 ? (
            <ResultNothing>검색어 없음</ResultNothing>
          ) : (
            <>
              <ResultTitle>추천검색어</ResultTitle>
              <ResultItem
                searchText={searchText}
                searchResult={searchResult}
                currentPage={currentPage}
              />
            </>
          )}
        </ResultContainer>
      )}
    </>
  )
}

export default SearchInputSection

const SearchInputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: 30px;
`

const ResultContainer = styled.div`
  width: 100%;
  max-height: 500px;
  margin-top: 10px;
  padding: 30px;
  background-color: white;
  border-radius: 20px;
  overflow: scroll;
`

const ResultTitle = styled.p`
  ${({ theme }) => theme.smallFont}
  margin-bottom: 10px;
`

const ResultNothing = styled.p``
