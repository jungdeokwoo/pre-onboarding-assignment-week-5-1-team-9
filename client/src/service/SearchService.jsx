export const cachingSearchResult = async text => {
  const searchURL = `${process.env.REACT_APP_API_URL}?q=${text}`
  const cacheStorage = await caches.open('search')
  const responsedCache = await cacheStorage.match(searchURL)
  try {
    if (responsedCache) {
      return responsedCache
    } else {
      const response = await fetch(searchURL)
      console.info('api')
      await cacheStorage.put(searchURL, response)
      const responsedCache = await cacheStorage.match(searchURL)
      return responsedCache
    }
  } catch (e) {
    console.alert('다시 접속해 주세요')
  }
}
