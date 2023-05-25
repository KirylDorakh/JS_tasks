const result = s => {
    s = s.toLowerCase()
    let obj = {}
    for (i in s){
        if (s[i] in obj){
            obj[s[i]] = obj[s[i]] + 1;
        } else {
            obj[s[i]] = 1;
        }
    }
    return obj
}


string1= ('Арарат');
console.log(string1.split(''))
console.log(result(string1))

//or
const countChars = str => {
    const chars = {};
    str.split('').forEach(char => {
        const lowerChar = char.toLowerCase();
        if (chars[lowerChar] === undefined) {
            chars[lowerChar] = 0;
        }
        ++chars[lowerChar];
    })
    return chars;
}

console.log( countChars('Арарат') )
