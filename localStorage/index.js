const myNumber = 42;

// only string
console.log(localStorage.getItem('number'))
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'))

localStorage.removeItem('key')

const person = {
    name: 'Max',
    age: 20
}

// [object Object]
localStorage.setItem('person', person)
localStorage.clear()

localStorage.setItem('person1', JSON.stringify(person))

const raw = JSON.parse(localStorage.getItem('person1'))
console.log(raw)

raw.name = 'Kirill'

console.log(raw.name)

window.addEventListener('storage', event => {
    console.log(event)
})


// window.onstorage = () => {}

// localStorage больше по объему чем куки,
// куки улетают с запросами на сервер, а localStorage нет