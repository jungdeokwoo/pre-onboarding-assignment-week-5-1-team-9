export const cachingSearchResult = async text => {
  const searchURL = `${process.env.REACT_APP_API_URL}?q=${text}`
  const cacheStorage = await caches.open('search')
  const responsedCache = await cacheStorage.match(searchURL)
  try {
    if (responsedCache) {
      return responsedCache
    } else {
      console.info('api')
      const response = await fetch(searchURL)
      await cacheStorage.put(searchURL, response)
      const responsedCache = await cacheStorage.match(searchURL)
      return responsedCache
    }
  } catch (e) {
    console.log(e)
  }
}
