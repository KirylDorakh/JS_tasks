const containsDigit = (str) => {
    return /\d/.test(str)
}

console.log(containsDigit('sdlfjsdlfj'))
console.log(containsDigit('adlkfja;lkdfjg3'))

// or
// const containsDigit = (str) => {
//     return Boolean(str.match(/\d/));
// }