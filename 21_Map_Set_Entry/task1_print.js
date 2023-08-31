print = (iter) => {
    try {
        for (let [key, value] of iter){
            console.log(`key: ${key}, value: ${value}`)
        }
    } catch {
        for (let value of iter){
            console.log(`value: ${value}`)
        }
    }


}

const entries = [
    ['name', 'Kirill'],
    ['age', 26],
    ['job', "Fullstack"]
]
const map = new Map(entries)

print(map)

const set = new Set([1, 1, 2, 2, 4, 4, 4, 4, 4, 5, 6, 6, 6, 7])

print(set)

// ==================== var 2 =====
const print1 = iterable => {
    for (let entry of iterable) {
        if (Array.isArray(entry)) {
            const [key, value] = entry;
            console.log('key:', key);
            console.log('value:', value);
        } else {
            console.log('value:', entry);
        }
    }
};

const map1 = new Map()
    .set({}, 'empty')
    .set('empty', {})
    .set('hello', 'world')
    .set(() => {}, {fn: 'function'} );

print1(map1);

const set1 = new Set([
    'hello', 'hello', 'hello', 'empty', 'world', () => {}, {}, {}
])

print1(set1);