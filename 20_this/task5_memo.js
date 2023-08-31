const calculator = {
    three() {
        return 3;
    },

    slowCalculation(n, m) {
        for (let i = 0; i < 1000000000; ++i);
        return n * m * this.three();
    }
};

const memo = fn => {
    let lastArgs = {};
    let lastReturn;
    return function(...args) {
        const currentArgs = JSON.stringify(args);
        if (currentArgs === lastArgs) {
            return lastReturn;
        }
        lastArgs = args;
        lastReturn = fn.call(this, ...arguments);
        // lastReturn = fn.apply(this, arguments);
        return lastReturn;
    };
};

console.log( calculator.slowCalculation(30, 40) );
console.log( calculator.slowCalculation(30, 40) );

calculator.slowCalculation = memo(calculator.slowCalculation);

console.log( calculator.slowCalculation(20, 30) )

// Эти два должны вывестись одновременно
setTimeout(() => {
    console.log( calculator.slowCalculation(30, 40))
    console.log( calculator.slowCalculation(30, 40))
}, 3000);