const getInfo = (persons) => {
    let ages = persons.map(item => item.age);
    console.log(ages)
    let age = ages.reduce((result, current) => result + current, 0) /persons.length;
    console.log(age)
    let maxAge = Math.max(... ages);
    let oldesPerson = persons.find(item => item.age === maxAge)
    return {name: oldesPerson.name, age}
}


console.log(getInfo([{name: 'Kirill', age: 25,},
                             {name: 'Ivan', age: 35,},
                             {name: 'Julia', age: 30,}]))


