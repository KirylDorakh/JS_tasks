const sayHello = (name='Иван', surname='Иванов', age=10, greeting='Привет,') => (
    greeting + ' ' + name + ' ' + surname + ', тебе ' + age + ' лет'
)

console.log( sayHello() );
console.log( sayHello('Дима') );
console.log( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );