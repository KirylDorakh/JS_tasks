function reverseAndNegate(arr) {
    let result = []
    for(let i = arr.length - 1; i > -1; i--) {
        result.push(arr[i]);
    }
    return result
}

console.log(reverseAndNegate([1, -2, 5, 4] ))


const reverseArr = (arr1) => {
    let reverse = [];
    arr1.forEach(item => reverse.unshift(item))
    return reverse
}
console.log(reverseArr([1, -2, 5, 4]))


const reverseA = (arr) => arr.reverse().map(item => -item)

console.log(reverseA([1, -2, 5, 4]))