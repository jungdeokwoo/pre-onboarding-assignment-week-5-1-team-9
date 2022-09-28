import React from 'react'
import styled from 'styled-components'
import ResultItem from './ResultItem'

const SearchResultSection = () => {
  return (
    <ResultContainer>
      <ResultTitle>추천검색어</ResultTitle>
      <ResultItem />
    </ResultContainer>
  )
}

export default SearchResultSection

const ResultContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 30px;
  background-color: white;
  border-radius: 20px;
`

const ResultTitle = styled.p`
  ${({ theme }) => theme.smallFont}
`
