let count = 0;
const sayHello = name => {

    return (function result(){

        if (count < 3) {console.log(name)}
        count += 1
    })()
}

sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')