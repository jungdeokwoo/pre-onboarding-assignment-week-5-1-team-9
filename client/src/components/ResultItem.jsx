import React from 'react'
import styled from 'styled-components'

const ResultItem = () => {
  return (
    <>
      <SearchItem>검색결과</SearchItem>
    </>
  )
}

export default ResultItem

const SearchItem = styled.div`
  width: 100%;
  padding: 10px 0;
  ${({ theme }) => theme.normalFont}
`
