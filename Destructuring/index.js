function calcValues(a, b){
    return [
        a + b,
        undefined,
        a * b,
        a / b
    ]
}

const [sum, sub='nothing', mult, ...other] = calcValues(42, 10)

// const sum = result[0]
// const sub = result[1]

// const [sum, sub] = result

console.log(sum, mult, other, sub)


// Objects

const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Belarus',
        city: 'Minsk'
    },
    otherInfo: 'info'
}

const {
    name: firstName = 'no name',
    age,
    car= 'nothing',
    address: {city: homeTown, country},
    ...info
} = person

console.log(firstName, age, car, homeTown, info)

function logPerson({name: firstName = 'no name', age}){
    console.log(firstName + ' ' + age)
}

logPerson(person)