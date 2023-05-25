function calculate(list1){
    let result = []
    let sum_fo_nums = 0
    list1.forEach(function(item){
        if (item % 2 === 0) {
            item += 4;
        } else {
            item -= 2;
        }

        if (item % 13 !== 0) {
            result.push(item);
            sum_fo_nums += item
        }
    })

    return sum_fo_nums
}

const l = [15, 2, 3, 5, 6];

const result = calculate(l);
console.log(result);


// decision 2

const calc = (arr) => {
    return arr
        .map(v => v % 2 === 0 ? v + 4 : v - 2)
        .filter(v => !(v % 13 === 0))
        .reduce((a, b) => a + b, 0)
}

console.log(calc(l))