const sayHello = (name='Иван', surname='Иванов', age=10,hello='Привет, ') => (
    `${hello}${name} ${surname}, тебе ${age} лет`
)

console.log( sayHello() );
console.log( sayHello('Дима') );
console.log( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );