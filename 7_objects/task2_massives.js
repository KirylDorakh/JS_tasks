const result = (l) => {
    let obj = {}
    for (i in l){
        obj[l[i][0]] = l[i][1]
    }
    return obj
}


list1 = [['ключ1', 'значение1'], ['ключ2', 'значение2']];

console.log(result(list1))

// or

const fromEntries = l => {
    const obj = {};
    l.forEach(entry => {
        obj[entry[0]] = entry[1];
    })
    return obj
}

console.log(fromEntries(list1))