const hideText = (item) => {
    let panel = item.lastElementChild
    if (panel.style.display === 'none') {
        panel.style.display = ''
    } else {
        panel.style.display = 'none'
    }
}

const buttons = (item) => {
    let btn = item.firstElementChild
    btn.addEventListener('click', () => {
        hideText(item);
    })
}

const accordions = document.querySelectorAll('.accordion');
accordions.forEach(buttons)

