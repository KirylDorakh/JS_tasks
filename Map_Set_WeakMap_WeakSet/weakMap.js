let obj = {name: 'weakmap'}

const arr = [obj]
const map = new WeakMap([
    [obj, 'obj data']
])

// obj = null

// console.log(obj)
// console.log(arr[0])

// console.log(map)
// console.log(map.has(obj))
// console.log(map.get(obj))
//
// obj = null
//
// console.log(map.has(obj))
// console.log(map.get(obj))


//=========================
const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }

    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

console.log(cache.get(alex))
console.log(cache.has(lena))

lena = null

console.log(cache.has(lena))