const randomNames = ['dddd', 'ffff', 'cccc', 'qqqq', 'wwww', 'aaaa', 'ssss', 'eeee', 'rrrr']

const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

function getRandomNames(randomNames) {
    let  i = random(1,20)
    const result = []
    for (i; i > 0; i--){
        result.push({
            price: random(300, 10000),
            name: randomNames[random(0, randomNames.length - 1)]
        })
    }
    return result
}

const getArr = (products) => {
    console.log(products)
}

function serverMock(latency, cb) {
    let products = getRandomNames(randomNames)
    setTimeout(()=> {cb(products)}, latency)
}

serverMock(1000, getArr)
serverMock(2000, getArr)
serverMock(3000, getArr)