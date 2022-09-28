import { useEffect, useState } from 'react'

const useDebounce = (inputValue, delay) => {
  const [debounceValue, setDebounceValue] = useState(inputValue)

  useEffect(() => {
    let debounceTimer = setTimeout(() => {
      setDebounceValue(inputValue)
    }, delay)
    return () => clearTimeout(debounceTimer)
  }, [inputValue, delay])

  return debounceValue
}

export default useDebounce
