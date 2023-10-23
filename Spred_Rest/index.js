const cities = ['Minsk', 'Moscow', 'Abu Dhabi']
const europeCities = ['Berlin', 'Paris', 'Riga']

const citiesWithPopulation = {
    Minsk: 20,
    Moscow: 40,
    AbuDhabi: 30
}
const europeCitiesWithPopulation = {
    Minsk: 26,
    Berlin: 10,
    Paris: 15,
    Riga: 25
}

// array
// Spread (...cities)
// console.log(...cities)

// spread es6
// const allCities = [...cities, 'New York', ...europeCities]
// console.log(allCities)

// es5
// const allCities = cities.concat(europeCities)
// console.log(allCities)

// object
// cna make only new object with information in old objects
// console.log({...europeCitiesWithPopulation})
// console.log({...europeCitiesWithPopulation, ...citiesWithPopulation})
// console.log({...citiesWithPopulation, ...europeCitiesWithPopulation})


// Practice
const numbers = [5, 37, 42, 17]
// console.log(Math.max(...numbers))
// before
// console.log(Math.max.apply(null, numbers))
//
//
// const divs = document.querySelectorAll('div')
// divs has forEach& but hasn't map(). it not array, it's nodeList
// console.log(divs, Array.isArray(divs))
// const nodes = [...divs]
// console.log(nodes, Array.isArray(nodes))


// Rest
function sum(a, b, ...rest){
    console.log(rest)
    return a + b + rest.reduce((a, i) => a + i, 0)
}

/// SPREAD
const number = [1, 2, 3, 4, 5, 6, 7]
// console.log(sum(...number))

// const a = number[0]
// const b = number[1]
// console.log(a, b)

const [a, b,...other] = number
console.log(a,b, other)

// for objects
const person = {
    name: 'Max',
    age: 20,
    city: 'Minsk',
    country: 'Belarus'
}

const {name, age, ...address} = person

console.log(name, age, address)
