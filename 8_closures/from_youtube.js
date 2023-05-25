function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Michal', age: 22, job: 'Frontend'};
const person2 = {name: 'Elena', age: 19, job: 'SMM'};

function bind(context, fn){
    return function(...args){
        fn.apply(context, args)
    }
}

bind(person1, logPerson)()
bind(person2, logPerson)()