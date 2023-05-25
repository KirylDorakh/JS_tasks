function createAdder(a){
    return function addA(b){
        return a + b
    }
}

let result = createAdder(10)

console.log(result(11))