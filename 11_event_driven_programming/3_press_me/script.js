const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};


const btn = document.querySelector('button')

btn.addEventListener('mouseenter', ()=>{
    btn.style.transform = ''
    btn.style.left = `${random(10, 90)}%`
    btn.style.top = `${random(5, 95)}%`
})