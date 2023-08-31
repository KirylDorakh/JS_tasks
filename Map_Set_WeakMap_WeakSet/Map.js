const obj = {
    name: 'Kirill',
    age: 26,
    job: "Fullstack"
};

const entries = [
    ['name', 'Kirill'],
    ['age', 26],
    ['job', "Fullstack"]
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)
//
// console.log(map)
// console.log(map.get('job'))

map
    .set('NewField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN1')

// console.log(map)
// console.log(map.get(NaN))
//
// console.log(map.delete('job'))
// console.log(map.has('job'))
//
// console.log(map.size)
// map.clear()
// console.log(map, map.size)

// ***********************************
// for .. of
// for (let [key, value] of map.entries()){
//     console.log(key, value)
// }
// for (let value of map.values()){
//     console.log(value)
// }
// for (let key of map.keys()){
//     console.log(key)
// }

// .forEach()
// map.forEach((value, key, map) => {
//     console.log(value, key, map)
// })

// ***********************************
// const array = [...map]
// const array1 = Array.from(map)
//
// console.log(array, array1)
//
// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

// ***********************************
const users = [
    {name: 'Yuliia'},
    {name: 'Pavel'},
    {name: 'Hamad'}
]

const visits = new Map()
visits.set(users[0], new Date())
visits.set(users[1], new Date(new Date().getTime() + 1000 * 60))
visits.set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user) 
}


console.log(lastVisit(users[2]))