class Thing{
    constructor(name) {
        this.name = name

    }
    born = function() {
        console.log(`${this.name} родился`);
    }
}

class Animal extends Thing {

    constructor(maxAge, name){
        super(name);
        this.maxAge = maxAge;
    }
}


class Bird extends Animal {

    fly = function(distance) {
        console.log(`Птица по имени ${this.name} пролетает ${distance} метров!`)
    }
}

class Fish extends Animal {

    swim = function(distance) {
        console.log(`Рыба по имени ${this.name} проплывает ${distance} метров!`)
    }
}

class Human extends Animal {

    constructor(maxAge, name, height){
        super(name, maxAge);
        this.height = height;
        this.inventions = [];
    }

    swim = function(distance) {
        console.log(`Рыба по имени ${this.name} проплывает ${distance} метров!`)
    }

    invent = function(item) {
        this.inventions.push(item);
        console.log(`Я, ${this.name}, изобрел ${item.name}`);
    }
}

class Chinese extends Human {

    buildWall = function() {
        console.log(`Я, ${this.name}, помогаю строить Великую Китайскую Стену!`)
    }
}


const ying1 = new Chinese('Ying', 73, 167);
ying1.born();
ying1.invent({ name: 'Кирка' } );
ying1.buildWall();

console.log(ying1 instanceof Thing) // Должно быть true
console.log(ying1 instanceof Animal) // Должно быть true
console.log(ying1 instanceof Human) // Должно быть true
console.log(ying1 instanceof Chinese) // Должно быть true
console.log(ying1 instanceof Fish) // Должно быть false
console.log(ying1 instanceof Bird) // Должно быть false
