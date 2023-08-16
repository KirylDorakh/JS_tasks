const arr = [
    new Date(),
    { hello: 'word' },
    new Date(234234234),
    { a: 'b' },
    239470293704957,
    [1, 2, 3, 4, 5],
    '1970-01-03T17:03:54.234Z',
];

const serialize = (arr) => {
    const arr1 = arr.map(item => {
        try{
            item.getTime()
        } catch (e) {
            return item
        }
        return `Date: ${item.valueOf()}`
    })
    return JSON.stringify(arr1)
}

const deserialize = (str) => {
    const result = JSON.parse(str).map(item => {
        if(typeof item !=='string'){
            return item
        }
        if(item.includes("Date:")){
            return new Date(Number(item.slice(6)))
        }
        return item
    })
    return result
}

const str = serialize(arr)

console.log(str)

const result = deserialize(str)
console.log(result)