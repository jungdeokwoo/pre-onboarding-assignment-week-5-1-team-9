import React from 'react'
import styled from 'styled-components'
import CommonInput from 'components/CommonInput'
import CommonButton from 'components/CommonButton'

const SearchInputSection = () => {
  const clickHandler = () => {
    console.log('i')
  }
  return (
    <SearchInputWrapper>
      <CommonInput></CommonInput>
      <CommonButton clickHandler={clickHandler}>검색</CommonButton>
    </SearchInputWrapper>
  )
}

export default SearchInputSection

const SearchInputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: 30px;
`
