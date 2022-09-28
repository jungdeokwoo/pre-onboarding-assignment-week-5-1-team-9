import { createContext, useState, useEffect } from 'react'
import { cachingSearchResult } from 'service/SearchService'

export const SearchContextStore = createContext()

const SearchContext = ({ children }) => {
  const [searchText, setSearchText] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    if (searchText === '') {
      setSearchResult([])
      return
    }
    cachingSearchResult(searchText)
      .then(res => res.json())
      .then(res => setSearchResult(res))
  }, [searchText, setSearchText])

  return (
    <SearchContextStore.Provider value={{ searchText, setSearchText, searchResult }}>
      {children}
    </SearchContextStore.Provider>
  )
}

export default SearchContext
