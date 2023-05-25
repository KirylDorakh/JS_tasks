console.log( window.innerWidth ); // полная ширина окна
console.log( document.documentElement.clientWidth );

btn = document.querySelector('button')

window.addEventListener('resize', ()=>{
    btn.innerHTML = `Ширина window ${window.innerWidth} пикселей`
})