function getMonth(n) {
    if (n === 1) {
        return 'january'
    } else if (n === 2) {
        return 'february'
    } else if (n === 3) {
        return 'march'
    } else if (n === 4) {
        return 'april'
    } else if (n === 5) {
        return 'may'
    } else if (n === 6) {
        return 'june'
    } else if (n === 7) {
        return 'july'
    } else if (n === 8) {
        return 'august'
    } else if (n === 9) {
        return 'september'
    } else if (n === 10) {
        return 'october'
    } else if (n === 11) {
        return 'november'
    } else if (n === 12) {
        return 'december'
    }
    return 'Error'
}

result = getMonth(11)
console.log(result)