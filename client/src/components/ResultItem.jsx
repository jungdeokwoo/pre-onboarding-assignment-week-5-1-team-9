import React from 'react'
import styled, { css } from 'styled-components'
import BoldText from 'utils/BoldText'

const ResultItem = ({ searchText, searchResult, currentPage }) => {
  return (
    <>
      {searchResult.map((result, index) => (
        <SearchItem key={result.sickCd} isSelected={index === currentPage}>
          {<BoldText text={result.sickNm} searchText={searchText} />}
        </SearchItem>
      ))}
    </>
  )
}

export default ResultItem

const SearchItem = styled.div`
  width: 100%;
  padding: 10px 0;
  ${({ theme }) => theme.normalFont}
  ${({ isSelected }) => {
    if (isSelected) {
      return css`
        background-color: rgb(220, 220, 220);
      `
    }
  }}
`
