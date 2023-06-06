const btn = document.querySelector('.btn')
const container = document.querySelector('.info')

const url = 'http://127.0.0.1:8000/api/1/'


const checkInfo = async (url) => {
    const response = await fetch(url)
    console.log('OK', response.status)
    if (response.ok){
        return await response.json()
    } else {
        console.log(response.status)
    }
}

btn.addEventListener('click', () => {
    checkInfo(url).then(info => {
        console.log(info)
        container.innerHTML = `<p>${info.title}</p>`
    })

})