console.log('Request some data...')

// без промисов. большая вложенность
// setTimeout(() => {
//     console.log('Preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(()=>{
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)

// promise
// resolve reject так же функции
// обычно пишется асинхронный код
const p = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

// здесь data = backendData, так как она передана в resolve
p.then((data) => {
    // const p2 = new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data.modified = true
            //resolve(data)
            reject(data)
            // console.log('Data received', data)
        }, 2000)
    })

    // p2.then(clientData => {
    //     console.log('Data received', clientData)
    // })
})
    .then(clientData => {
    console.log('Data received', clientData)
    clientData.fromPromise = true
    return clientData
})
    .then(finishData => console.log('Modified ', finishData))
    // для reject
    .catch((err) => console.error('error:', err))
    // будет вызвано в любом случае
    .finally(()=> console.log('Finally'))