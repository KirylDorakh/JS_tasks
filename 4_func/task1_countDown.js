function countDown(n){
    let result = '';
    for (let i = n; i > 0; i--) {
        result += i + ' ';
    }
    return result;
}

result = countDown(6);
console.log(result);