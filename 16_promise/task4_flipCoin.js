const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const checkLuck = (chancePercents = 50) => {
    const probability = chancePercents / 100;
    return Math.random() <= probability;
}

const flip = () => {
    if (checkLuck()){
        return 'heads';
    } else {
        return 'tails'
    }
}

const flipCoin = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(flip())
        }, random(50, 200))
    })
}

let result = {
    'heads': 0,
    'tails': 0
}
let promises = []
for (let i = 100000; i > 0; i --){
    promises.push(flipCoin())
}

Promise.all(promises).then((data) => {
    data.forEach((item)=>{
        result[item] += 1
    });
}).finally(()=>{console.log(result)});



