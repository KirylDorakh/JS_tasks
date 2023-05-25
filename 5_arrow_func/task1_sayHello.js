const sayHello = (name='Dear', surname='User', age=20, greeting='Hello') => {
    return `${greeting}, ${name} ${surname}, your age is ${age}`
}

console.log( sayHello() );
console.log( sayHello('Дима') );
console.log( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );