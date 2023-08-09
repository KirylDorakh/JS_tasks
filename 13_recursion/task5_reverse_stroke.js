function reverse(str) {
    if (str.length === 0){
        return ''
    } else {
        return str.slice(-1) + reverse(str.slice(0, -1))
    }
}

console.log(
    reverse('hello'),
    reverse(''),
    reverse('1234567890'),
)

// var 2
// const reverse = function rev(str) {
//     if (str === '') return str;
//     const lastIdx = str.length -1;
//     return str[lastIdx] + rev( str.slice(0, lastIdx) )
// }
