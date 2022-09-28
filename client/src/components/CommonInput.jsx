import React from 'react'
import styled from 'styled-components'

const CommonInput = () => {
  return <InputComponent />
}

export default CommonInput

const InputComponent = styled.input`
  flex: 8;
  width: 100%;
  height: 100%;
  padding: 0 25px;
  border: none;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  ${({ theme }) => theme.normalFont}
`
