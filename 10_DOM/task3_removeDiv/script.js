const removeDivs = html => {
    const result = document.createElement("html");
    result.innerHTML = html;
    let divs = result.querySelectorAll('div')
    for(let div of divs){
        div.parentNode.removeChild(div)
    }

    let print = result.lastChild.innerHTML
    return print
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

console.log(removeDivs(html))
alert( removeDivs(html));
alert( removeDivs(html) === 'Hello <b>World!</b>'); // Должно быть true