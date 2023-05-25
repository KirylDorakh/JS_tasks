const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'purple'];

const getRandomColor = () => {
    return colors[random(0, colors.length - 1)]
};

const paragraphs = document.querySelectorAll('p');

setInterval(() => {
    paragraphs.forEach(p => {
        p.style.backgroundColor = getRandomColor();
    })
}, 1000);