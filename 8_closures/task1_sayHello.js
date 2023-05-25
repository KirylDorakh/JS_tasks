let i = 0
const sayHello = name => {
    function onlyThree(){
        console.log(`Hello, ${name}`);
        i += 1;
    }
    if (i < 3){
        return onlyThree()
    }

}

sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')

//or
const sayHello2 = (() => {
    let count = 0;
    return name => {
        if (count < 3){
            console.log(`Hello, ${name}`);
            count ++;
        }
    }
})()

sayHello2('Andrew')
sayHello2('Andrew')
sayHello2('Andrew')
sayHello2('Andrew')
sayHello2('Andrew')
sayHello2('Andrew')
sayHello2('Andrew')