const checkLuck = (chancePercents = 50) => {
    const probability = chancePercents / 100;
    return Math.random() <= probability;
}

const tries = {
    [true]: 0,
    [false]: 0,
}

for (let i = 0; i < 1000000; ++i) {
    tries[checkLuck(20)]++;
}
console.log(tries);