const calculate = (arr) => {
    let result = 0
    let arr2 = arr.map(function(item) {
            item % 2 === 0 ? item += 4 : item -=2
            return item
        })
    arr2.forEach(item => {
        if (item % 13 !== 0) {result += item}
    })
    return result
}

console.log( calculate([15, 2, 3, 5, 6]))