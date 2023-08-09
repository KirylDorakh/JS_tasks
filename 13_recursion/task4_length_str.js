function len(str){
    if(!str){
        return 0
    } else {
        return 1 + len(str.slice(0, -1))
    }
}

console.log(
    len('hello'),
    len(''),
    len('111111111111'),
)

// var 2
// const len = function length(str, n = 0) {
//     if (str === '') return n;
//     return length(str.slice(1), n + 1);
// }