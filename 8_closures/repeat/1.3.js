const sayHello = ((name) => {
    let counter = 0

    return name => {
        if (counter >= 3) return;
        console.log(`Hello, ${name}`)
        counter ++

    }

})()

sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')