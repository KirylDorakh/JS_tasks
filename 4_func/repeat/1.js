let result = '';

function countDown(n){
    for(n; n > 0; n--){
        result += ` ${n}`;
    }
    return result
}

let count = countDown(10)
console.log(count)