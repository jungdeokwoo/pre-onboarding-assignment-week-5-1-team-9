import React from 'react'
import styled from 'styled-components'
import SearchInputSection from 'components/SearchInputSection'

const App = () => {
  return (
    <SearchContainer>
      <SearchTitleWrapper>
        <SearchTitle>국내 모든 임상시험 검색하고</SearchTitle>
        <SearchTitle>온라인으로 참여하기</SearchTitle>
      </SearchTitleWrapper>
      <SearchInputSection />
    </SearchContainer>
  )
}

export default App

const SearchContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  min-height: 500px;
  padding: 30px;
  background-color: ${({ theme }) => theme.mainBox};
  transform: translate(-50%, -50%);
  outline: none;
`

const SearchTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
`

const SearchTitle = styled.h1`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.headerFont};
`
