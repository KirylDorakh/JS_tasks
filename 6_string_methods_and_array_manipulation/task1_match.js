function match(stroke1, stroke2) {
    return stroke1.toLowerCase() === stroke2.toLowerCase()
}

result = match('hEllO', 'HELLo')

console.log(result)