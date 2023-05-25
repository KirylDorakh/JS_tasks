function sayHello(name) {
    let counter = 0
    //
    return function() {
        if(counter < 4){
            console.log(name)
        }
        return counter ++
    }
}

let result = sayHello('Andrew')
result()
result()
result()
result()
result()
result()