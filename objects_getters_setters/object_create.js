// Object.create принимает два параметра и оба объекты
const person = Object.create(
    {
    // prototip object
        calculateAge() {
            console.log("Age: ", new Date().getFullYear() - this.birthYear)
        }
    },
    {
    name: {
        value: "Kirill",
        // отображать
        enumerable: true,
        // изменять
        writable: true,
        // удалять
        configurable: true
    },
    birthYear: {
        value: 1992,
        enumerable: false,
        // изменять
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'red'
            console.log("set age", value)
        }
    }
})

// чтобы не пробегаться по прототипу
for (let key in person){
    if(person.hasOwnProperty(key)){
        console.log(key, person[key])
    }
}

console.log(person)

person.name = "Max"

for (let key in person){
    console.log(key, person[key])
}

delete person.name;
console.log(person)
// get
console.log(person.age)
console.log(person.age = 100)
person.calculateAge()
