const isValidJson = str => {
    if (!str || typeof str !== 'string') {
        return false;
    }
    try {
        JSON.parse(str)
        return true;
    } catch(e) {
        return false;
    }
}

console.log(  [
    'a;lsdkjfa;lkejr',
    JSON.stringify({}),
    JSON.stringify({ hello: 'world' }),
    JSON.stringify({ date: new Date() }),
    JSON.stringify([1,2,3,4,5]),
    '',
    928374928374928347,
].map(isValidJson))