const btn = document.querySelector('.btn')
const div = document.getElementById('main')

const createButton = text => {
    let newBtn = document.createElement('button')
    newBtn.type = 'button'
    newBtn.innerHTML = `${text}`
    div.insertAdjacentElement('beforeend', newBtn)
    newBtn.addEventListener('click', (text) => {
        console.log('copy')
        createButton('newCopy')
    })
}


btn.addEventListener('click', ()=>{
    console.log('button')
    createButton('Copy')
});
