const checkLuck = (chancePercents = 50) => {
    const probability = chancePercents / 100;
    return Math.random() <= probability;
}

const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const productNames = [
    'Орехи', 'Морковь', 'Спаржа', 'Печенье', 'Наушники', 'Молоко',
    'Сок', 'Контейнер', 'JS-разработчик', 'Прямые руки', 'Водка',
];
const getRandomProductName = () => {
    return productNames[random(0, productNames.length - 1)];
};
const getRandomPrice = () => random(300, 10000);
const getRandomList = () => {
    return  Array.from({ length: random(5, 10) })
        .map(() => ({
            name: getRandomProductName(),
            price: getRandomPrice(),
        }));

}

const serverMock = (latency) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkLuck(30)){
                reject('This is error')
            }else{
                resolve(getRandomList())
            }
        }, latency)
    })
};

for (let i = 10; i > 0; i--) {
    serverMock(3000).then((data)=>{
        console.log('Ready',data)
    }).catch(err => console.log(err));
}
