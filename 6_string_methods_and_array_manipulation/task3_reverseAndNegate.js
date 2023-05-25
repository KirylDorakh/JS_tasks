function task3_reverseAndNegate(list_of_nums) {

    let reverse = []
    list_of_nums.forEach(function(item) {
        reverse.unshift(-item)
    })
    return reverse
}

const l = [1, -2, 5, 4];
let result = task3_reverseAndNegate(l)
console.log(result)


// decision 2
const reverseAndNegate = (arr) => {
    return arr.reverse().map(value => -value)
}

console.log(reverseAndNegate(l))