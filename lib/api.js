//const url = "https://moon-fish.herokuapp.com/api/"
const url = "http://localhost:1337/api/"

//Get API path
export function getURL(path = "") {
    return `${ url }${ path }`
}

//GET request to API
export async function fetchAPI(path) {
    const requestUrl = getURL(path)
    const response = await fetch(requestUrl)
    const data = await response.json()

    return data;
}