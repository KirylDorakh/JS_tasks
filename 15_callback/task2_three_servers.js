const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const LATENCY = 400

const getProduct = (productNumber, cb) => {
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
    console.log(`rack number - ${productsById[productNumber].rackId}`)
    setTimeout(cb, LATENCY, productsById[productNumber].rackId)
}

const getBoxNumber = (rackNumber, productNumber, cb) => {
    const rackId = {
        // rackId: boxes: { boxId0: productId2, boxId1: productId0 }
        1: [2, 0, 1, 6, 7, 8],
        2: [5, 3, 4, 10, 9],
    };
    console.log(`box number - ${rackId[rackNumber].indexOf(productNumber)}`)
    setTimeout(cb, LATENCY, rackId[rackNumber].indexOf(productNumber))
}

const getWeigth = (rackNumber, boxNumber, cb) => {
    const boxId = {
        // rackId: boxes: { boxId0: massProductId2, boxId1: massProductId0 }
        1: [10, 11, 12, 13, 14, 15],
        2: [16, 17, 18, 19, 20],
    }
    setTimeout(cb, LATENCY, boxId[rackNumber][boxNumber])
}

const weight = (w) => {
    console.log(w)
}
productID = random(0, 10)
console.log(`product number - ${productID}`)


let productWeigth = (productNumber) => {
    getProduct(productNumber, (rackNumber) => {
        getBoxNumber(rackNumber, productNumber, (boxNumber) => {
            getWeigth(rackNumber, boxNumber, (w) => {
                weight(w)
            })
        })
    })
}

productWeigth(productID)
