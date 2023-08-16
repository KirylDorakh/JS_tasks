const slowCalculation = (n, m) => {
    for (let i = 0; i < 1000000000; ++i);
    return n * 100 * m;
};

const memo = fn => {
    let lastArgs = {};
    let lastReturn;
    return (...args) => {
        const currentArgs = JSON.stringify(args);
        if (currentArgs === lastArgs) {
            return lastReturn;
        }
        lastArgs = args;
        lastReturn = fn(...args);
        return lastReturn;
    };
};

console.log( slowCalculation(10, 20) );
console.log( slowCalculation(10, 20) );

const memoizedCalculation = memo(slowCalculation);

console.log( memoizedCalculation(20, 30) )

// Эти два должны вывестись одновременно
setTimeout(() => {
    console.log( memoizedCalculation(30, 40))
    console.log( memoizedCalculation(30, 40))
}, 3000);