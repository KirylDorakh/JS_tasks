const isEven = (n) => {
    return /[02468]$/.test(n)
}

console.log(isEven(10))
console.log(isEven(10123))

console.log(
    isEven(0),
    isEven(1),
    isEven(2),
    isEven(-13),
    isEven(-14),
    isEven(13),
    isEven(14),
)

//or
// const isEven = (n) => {
//     const nStr = String(n);
//     return Boolean( nStr.match(/-?\d*[24680]$/) );
// }