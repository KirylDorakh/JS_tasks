const people = [
    {name: 'Kirill', age: 30, budget: 40000},
    {name: 'Yuliia', age: 29, budget: 50000},
    {name: 'Ivan', age: 33, budget: 60000},
    {name: 'Sasha', age: 16, budget: 1800},
    {name: 'Mikel', age: 25, budget: 25000},
    {name: 'John', age: 15, budget: 33000},
]

// for
// for (let i = 0; i < people.length; i++){
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

// forEach
// people.forEach((person, index, pArr) => {
    // console.log(person)
    // console.log(index)
    // console.log(pArr)
// })

// Map
// const newPeople = people.map((person, index, pArr) => {
//     return person.name
// })
//
// console.log(newPeople)

// Filter
// const adults = []
// for (let i = 0; i < people.length; i++){
//     if (people[i].age >= 18){
//         adults.push(people[i])
//     }
// }

// const adults = people.filter(person => person.age >= 18)
//
// console.log(adults)

// Reduce
// let amount = 0
// for (let i = 0; i < people.length; i++){
//     amount += people[i].budget
// }

// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount)

// Find
// const ivan = people.find((person) => {
//     return person.name === 'Ivan'
// })
// console.log(ivan)

// FindIndex
// const ivanIndex = people.findIndex((person) => {
//     return person.name === 'Ivan'
// })
// console.log(ivanIndex)

///////////////////////////
const amount = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: Math.sqrt(person.budget)
        }
    })
    .reduce((total, person) => total + person.budget, 0)

console.log(amount)