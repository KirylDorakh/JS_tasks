const subtitleName = (str) => {
    const pos = str.indexOf('/r/')
    console.log(pos)
    return str.slice(pos + 3,-1)
}


console.log(subtitleName('https://reddit.com/r/название_раздела/'))