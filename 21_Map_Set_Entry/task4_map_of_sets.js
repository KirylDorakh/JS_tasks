function objToMapOfSet(obj){
    const result = new Map()
    for(let [key, value] of Object.entries(obj)){
        result.set(key, new Set(value))
    }

    return result
}

const arrays = {
    arr1: [1, 2, 3, 4, 5, 6],
    arr2: [2, 3, 3, 3, 6, 7],
    arr3: [3, 4, 5, 5, 7, 9],
    arr4: [4, 5, 6, 7, 8, 9],
    arr5: [5, 6, 7, 8, 9, 10],
    ones: [1,1,1,1,1,1,1,1,1,1,1,1,1,11,11,1111,11,1],
    twos: [2,2,2,2,2,2,2,2222,22,222222,222,2,2,2,22],
    threes: [3,33,3333,333,33,33,3,3333,33,3,3,3,3,3],
}

console.log(objToMapOfSet(arrays))


// ============== var 2 =========
const transformObjectOfArraysToMapOfSets = obj => {
    const entriesWithSets = Object.entries(obj)
        .map(([key, value]) => [key, new Set(value)]);
    return new Map(entriesWithSets);
}

const obj = {
    ones: [1,1,1,1,1,1,1,1,1,1,1,1,1,11,11,1111,11,1],
    twos: [2,2,2,2,2,2,2,2222,22,222222,222,2,2,2,22],
    threes: [3,33,3333,333,33,33,3,3333,33,3,3,3,3,3],
}

console.log(transformObjectOfArraysToMapOfSets(obj));