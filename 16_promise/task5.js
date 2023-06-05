const LATENCY = 400

const checkLuck = (chancePercents = 50) => {
    const probability = chancePercents / 100;
    return Math.random() <= probability;
}

const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

getProduct = (productID, cb) =>{
    const productsById = {
        0: { name: 'Орехи', rackId: 1 },
        1: { name: 'Морковь', rackId: 1 },
        2: { name: 'Спаржа', rackId: 1 },
        3: { name: 'Печенье', rackId: 2 },
        4: { name: 'Наушники', rackId: 2 },
        5: { name: 'Молоко', rackId: 2 },
        6: { name: 'Сок', rackId: 1 },
        7: { name: 'Контейнер', rackId: 1 },
        8: { name: 'JS-разработчик', rackId: 1 },
        9: { name: 'Прямые руки', rackId: 2 },
        10: { name: 'Водка', rackId: 2 },
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkLuck(10)){
                reject(`This is error from getProduct`)
            } else {
                resolve(productsById[productID])
            }
        }, LATENCY)
    })
}

const getBoxNumber = (rack, productID) => {
    const rackId = {
        // rackId: boxes: { boxId0: productId2, boxId1: productId0 }
        1: [2, 0, 1, 6, 7, 8],
        2: [5, 3, 4, 10, 9],
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkLuck(10)){
                reject(`This is error from getBoxNumber`)
            }else{
                resolve(rackId[rack].indexOf(productID))
            }
        }, LATENCY)
    })
}

const getWeigth = (rackNumber, boxNumber) => {
    const boxId = {
        // rackId: boxes: { boxId0: massProductId2, boxId1: massProductId0 }
        1: [10, 11, 12, 13, 14, 15],
        2: [16, 17, 18, 19, 20],
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkLuck(10)){
                reject(`This is error from getBoxNumber`)
            }else{
                resolve(boxId[rackNumber][boxNumber])
            }
        }, LATENCY)
    })
}

const productWeight = (productID) => {
    let gRack
    let gBox
    let gName
    getProduct(productID)
        .then(({name, rackId}) => {
            gRack = rackId
            gName = name
            return getBoxNumber(rackId, productID)
        })
        .then((boxNumber) => {
            gBox = boxNumber
            return getWeigth(gRack, boxNumber)
        })
        .then((weight) => {
            console.log(`Коробка №${gBox} c ${gName} находится на стеллаже №${gRack} и весит ${weight} кг.`)}
        )
        .catch(err => {console.error(err)})
}

productWeight(random(0, 10))
