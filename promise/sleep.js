const sleep = ms => {
    return new Promise(resolve =>
        setTimeout(()=> {
                resolve()}, ms)
    )
}

// sleep(2000).then(() => {console.log('After 2 sec')})
// sleep(3000).then(() => {console.log('After 3 sec')})

// будет выполнен только когда завершаться все промисы
Promise.all([sleep(2000), sleep(5000)]).then(()=>{
    console.log('All promises')
})

// выполнеться после первого промиса
Promise.race([sleep(2000), sleep(5000)]).then(()=>{
    console.log('Race promises')
})