const result = (url) => {
    return url.slice(21,-1)
}

url = 'https://reddit.com/r/название_раздела/'

console.log(result(url))