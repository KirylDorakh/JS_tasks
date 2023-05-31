const replaceVowels = str => {
    const vowelRegexp = /[уеыаоэёяию]/gi
    const chars = str.split('');
    const vowels = chars.reduce((vowels, char, idx) => {
        if (char.match(vowelRegexp)) {
            vowels.push({ char, idx });
        }
        return vowels;
    }, [])

    let newStr = str;
    vowels.forEach(({ char, idx }) => {
        newStr = newStr.replace(char, idx);
    })
    return newStr;
}

console.log( replaceVowels('Здравствуйте Ребята!') );