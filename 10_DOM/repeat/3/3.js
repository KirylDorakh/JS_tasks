const removeDivs = html => {
    return html;
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';



alert( removeDivs(html));
alert( removeDivs(html) === 'Hello <b>World!</b>');