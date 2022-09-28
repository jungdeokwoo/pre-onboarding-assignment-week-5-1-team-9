import useDebounce from 'hooks/useDebounce'
import React, { useContext, useEffect, useState } from 'react'
import { SearchContextStore } from 'store/searchStore'
import styled from 'styled-components'

const CommonInput = () => {
  const [inputText, setInputText] = useState('')
  const { setSearchText } = useContext(SearchContextStore)
  const debounceValue = useDebounce(inputText, 1000)

  useEffect(() => {
    setSearchText(debounceValue.trim())
  }, [debounceValue, setSearchText])

  const inputHandler = ({ target }) => {
    setInputText(target.value)
  }

  return <InputComponent onChange={inputHandler} value={inputText} />
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
