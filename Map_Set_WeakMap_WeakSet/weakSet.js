const users = [
    {name: 'Yuliia'},
    {name: 'Pavel'},
    {name: 'Hamad'}
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

console.log(visits.has(users[3]))
console.log(visits.has(users[1]))
console.log(visits.has(users[0]))

users.splice(1, 1)

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))