
function* fib(){
    let current = 0
    let prev = 1
    let middle = 1

    for (let i = 0;i < 100; i ++){
        if(i < 2){
            yield 1;
        }else {
            current = prev + middle
            middle = prev
            prev = current
            yield current
        }
    }
}


let generator = fib()

for (let i of generator){
    console.log(i)
}