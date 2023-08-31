function onlyUniqueLength(arr){
    const map = new Map()
    const set = new Set()
    const result = []
    arr.forEach(item => {
        map.set(item, item.length)
    })
    map.forEach((value, key) => {
        if (!set.has(value)){
            set.add(value)
            result.push(key)
        }
    })
    return result
}


console.log(onlyUniqueLength(['1', '2', '3', '44']))
console.log(onlyUniqueLength(['1', '2', '3', '44', '55', '66', '777', '978']))


// =============var 2========
const onlyUniqueLength1 = arr => {
    const map = new Map();
    arr.reverse('').forEach(word => {
        map.set(word.length, word);
    })
    return [...map.values()].reverse();
}

const arr1 = ['1', '2', '3', '44']
console.log( onlyUniqueLength1(arr1) )

const arr2 = ['1', '2', '3', '44', '55', '66', '777', '987'];
console.log( onlyUniqueLength1(arr2) )