function fac(n){
    if(n === 1){
        return n
    } else {
        return n * fac(n - 1)
    }

}

console.log(fac(5))