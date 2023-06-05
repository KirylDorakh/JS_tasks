const delay = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// promise
// function fetchToDos() {
//     console.log("Fetch todo started")
//     return delay(2000)
//         .then(() => {
//             return fetch(url)
//         })
//         .then(response => response.json())
// }
//
// fetchToDos()
//     .then(data => {console.log(data)})
//     .catch(e => console.error(e))

// async await
async function fetchAsyncToDo() {
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data', data)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('Finnaly')
    }

}

fetchAsyncToDo()