import React from 'react'
import styled from 'styled-components'

const CommonButton = ({ children, clickHandler }) => {
  return <ButtonComponent onClick={clickHandler}>{children}</ButtonComponent>
}

export default CommonButton

export const ButtonComponent = styled.button`
  flex: 2;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.button};
  border: none;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  ${({ theme }) => theme.normalFont}
  color: white;
`
