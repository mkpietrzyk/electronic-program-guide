export const testFetch = () => {
  fetch('http://localhost:1337/epg').then(
      (response) => {
        return response.json()
      }
  ).then(
      (epgData) => {
        console.log(epgData)
      }
  ).catch(
      (errorFetching) => {
        console.log('failed to fetch: ', errorFetching)
      }
  )
}