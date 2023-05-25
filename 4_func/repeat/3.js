function repeatWord(word, count){
    let result = ''
    for (count; count > 0; count--){
        result += `, ${word}`
    }
    result = result.slice(2)
    return result
}

console.log(repeatWord('fun', 3))

