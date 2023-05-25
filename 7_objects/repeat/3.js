const countChars = (str) => {
    let result = {}
    let arr = [... str.toLowerCase()]
    console.log(arr)
    arr.forEach(item => result[item] = 0)
    arr.forEach(item => {
        if (item in result) {
            result[item] += 1
        }
    })
    return result
}

console.log(countChars('Арарат'))
console.log('Арарат'.split(''))