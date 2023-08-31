const calculator = {
    three() {
        return 3;
    },

    slowCalculation(n, m) {
        for (let i = 0; i < 1000000000; ++i);
        return n * m * this.three();
    }
};

const withCache = (fn, hash) => {
    const cache = new Map();
    return function(...args) {
        const currentArgs = hash(...args);
        if (cache.has(currentArgs)) {
            return cache.get(currentArgs);
        }
        const newReturn = fn.apply(this, arguments);
        cache.set(currentArgs, newReturn)
        return newReturn;
    };
};

console.log( calculator.slowCalculation(30, 40) );
console.log( calculator.slowCalculation(30, 40) );

const hash = (a, b) => String(a) + `,${b}`;
calculator.slowCalculation = withCache(calculator.slowCalculation, hash);

console.log( calculator.slowCalculation(20, 30) )

// Эти два должны вывестись одновременно
setTimeout(() => {
    console.log( calculator.slowCalculation(30, 40))
    console.log( calculator.slowCalculation(30, 40))
}, 3000);