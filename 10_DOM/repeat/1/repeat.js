const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
};

console.log(( random(0, 100) ))