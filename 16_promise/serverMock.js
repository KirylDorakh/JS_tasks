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

const serverMock = (latency, cb) => {
    const products = Array.from({ length: random(5, 10) })
        .map(() => ({
            name: getRandomProductName(),
            price: getRandomPrice(),
        }));

    setTimeout(() => {
        cb(products);
    }, latency)
};

serverMock(3000, (products) => {
    console.log(products);
});