// const animal = {
//     name: "Animal",
//     age: 5,
//     hasTail: true
// }
//
// console.log(animal)

// ES6

class Animal {
    //static method or variables
    static type = "ANIMAL"

    // initialization:
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log("I am animal")
    }
}

const animal = new Animal({
    name: "Animal",
    age: 5,
    hasTail: true
})

console.log(animal);
animal.voice();

console.log(animal.type);
console.log(Animal.type);

// полноценное наследование
class Cat extends Animal {
    static type = "CAT"
    constructor(options) {
        super(options);
        this.color = options.color
    }

    voice(){
        super.voice()
        console.log("I am cat")
    }

    //getters
    get ageInfo(){
        return this.age * 7
    }

    //setters
    set ageInfo(newAge){
        this.age = newAge
    }
}

const cat = new Cat({
    name: "cat",
    age: 2,
    hasTail: true,
    color: "black"
})

console.log(cat);
cat.voice();
console.log(Cat.type);
console.log(cat.ageInfo)
console.log(cat.ageInfo = 7)
console.log(cat.ageInfo)