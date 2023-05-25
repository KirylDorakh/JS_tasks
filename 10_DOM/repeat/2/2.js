let pars = document.getElementsByClassName('par')
let colors = ['blue', 'cyan', 'darkgreen', 'crimson', 'peru']
let pars2 = document.querySelector('#p')

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(pars.length)
pars2.style.background = colors[random(0,4)];

let timer = setInterval(() => {
    for (let i = 0; i < pars.length; i++){
        pars[i].style.background = colors[random(0, 4)]
    }
}, 300);

const forId = () =>{
    pars2.style.background = colors[random(0,4)];
    let timer2 = setTimeout(forId, 200)
}

forId()

