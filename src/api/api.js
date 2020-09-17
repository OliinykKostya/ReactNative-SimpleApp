export function fetchData(url) {
    const news =  fetch(url)
    .then(response => response.json())
  return news
}