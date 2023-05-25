const change = document.getElementsByClassName('change');
const start = document.querySelector('.start');
const finish = document.querySelector('.finish');

const listOfColors = ['AliceBlue', 'Aquamarine', 'Blue', 'Cyan', 'DarkBlue', 'Crimson', 'DarkMagenta', 'DeepPink', 'Teal']

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const timer = () =>{
    const interval = setInterval(() => {
        for (i of change){
            i.style.color = listOfColors[random(0, listOfColors.length - 1)]
        }
    }, 1000)
    
    finish.addEventListener('click', () =>
        clearInterval(interval)
    )
}

start.addEventListener('click', timer)


