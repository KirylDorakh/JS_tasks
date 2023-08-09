function pow(a, b){
    if (a === 0) {
        return 0
    }
    if (b === 0){
        return 1
    }
    if (b < 0){
        return -1 / pow(a, -1 * b)
    }

    if ( b === 1){
        return a
    } else {
        return a * (pow(a, b - 1))
    }
}
console.log(pow(-5, -2))