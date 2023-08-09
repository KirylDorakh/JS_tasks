const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const checkLuck = (chancePercents = 50) => {
    const probability = chancePercents / 100;
    return Math.random() <= probability;
}

const flipCoin = () => {
    if ( checkLuck(50) ) {
        return 'heads';
    } else {
        return 'tails';
    }
};

async function* flipCoins() {
    while(true) {
        await new Promise(res => setTimeout(() => res(), random(200, 400)));
        yield flipCoin();
    }
}

(async () => {
    let counter = 0;
    const startTime = performance.now();
    for await (let result of flipCoins()) {
        console.log(result);
        if (++counter === 10) break;
    }
    const endTime = performance.now();
    console.log(`Time passed: ${endTime - startTime} ms`);
})();