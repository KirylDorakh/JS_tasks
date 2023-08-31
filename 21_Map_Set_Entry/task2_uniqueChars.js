function uniqueChars(str){

    return new Set(str).size
}

console.log(uniqueChars('aaasssddd  cccc'))


// ============== var2 ========
const unique = str => {
    return new Set(str.split('')).size;
}

const str = 'abcabcabcabca abcabcabbbbcbabcbac';

console.log( unique(str) )