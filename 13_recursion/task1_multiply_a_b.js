const multiply = function mult(a, b) {
    if (a === 0 || b ===0) {
        return 0
    }
    if (b < 0) {
        return -1 * mult(a, -1 * b);
    }

    if (b === 1) {
        return a;
    } else {
        return a + mult(a, b - 1)
    }
}

console.log(multiply(-4,-3))