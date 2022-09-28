import React from 'react'
import styled from 'styled-components'

export const BoldText = ({ text, searchText }) => {
  const splitText = text.split(searchText)
  return (
    <>
      <NormalText>{splitText[0]}</NormalText>
      <Bold>{searchText}</Bold>
      <NormalText>{splitText[1]}</NormalText>
    </>
  )
}

export default BoldText

const NormalText = styled.span``

const Bold = styled.span`
  font-weight: bold;
`
