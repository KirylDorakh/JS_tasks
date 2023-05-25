const fromEntries = entries => {
    const obj = {};
    // entries.forEach(entry => {
    //     obj[entry[0]] = entry[1];
    // })
    entries.map(item => {
        obj[item[0]] = item[1]
    })
    return obj;
}

console.log(fromEntries ( [['ключ1', 'значение1'], ['ключ2', 'значение2']] ));