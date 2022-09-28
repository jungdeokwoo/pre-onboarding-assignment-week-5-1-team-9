import { createContext, useState } from 'react'

export const InputContextStore = createContext()

const InputContext = ({ children }) => {
  const [text, setText] = useState('')

  return (
    <InputContextStore.Provider value={{ text, setText }}>{children}</InputContextStore.Provider>
  )
}

export default InputContext
