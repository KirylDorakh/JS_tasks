const sayHello = (() => {
    let countCalls = 0;

    return name => {
        if (countCalls >= 3) return;
        console.log(`Hello, ${name}`);
        ++countCalls;
    }
})();

sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')
sayHello('Andrew')