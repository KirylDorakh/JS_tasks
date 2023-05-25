function getInfo(persons) {
    let middleAge = 0;
    let resultPerson = {
        name: '',
        middleAge: -1
    }
    persons.forEach(function(person){
        middleAge += person.age
        if (person.age > resultPerson.middleAge){
            resultPerson.name = person.name
            resultPerson.middleAge = person.age
        }
    })
    resultPerson.middleAge = middleAge/persons.length
    return resultPerson
}


person1 = {
    name: 'Ivan',
    age: 30
}

person2 = {
    name: 'Sergey',
    age: 35
}

person3 = {
    name: 'Kirill',
    age: 44
}

console.log(getInfo([person1, person2, person3]))