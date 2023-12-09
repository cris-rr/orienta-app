export const fetchDataOld = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    const data = await response.json()
    // console.log('FetchDataOld: ', {data})
    return data;
  } catch (error) {
    console.error(error)
  }
}
