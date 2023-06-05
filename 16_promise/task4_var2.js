const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const checkLuck = (chancePercents = 50) => {
    const probability = chancePercents / 100;
    return Math.random() <= probability;
}

const flipCoin = () => new Promise((res, rej) => {
    setTimeout(() => {
        if ( checkLuck(50) ) {
            res('heads');
        } else {
            res('tails');
        }
    }, random(50, 200));
});

const flips = Array.from({ length: 100000 })
    .map(() => flipCoin());

Promise.all(flips).then(results => {
    const counts = results.reduce((counts, result) => {
        counts[result]++;
        return counts;
    }, {tails: 0, heads: 0});

    console.log('With Promise.all', counts);
});