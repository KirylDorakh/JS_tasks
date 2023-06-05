const promiseTimeout = (ms, promise) => {
    const timeout = new Promise((reject) => {
        setTimeout(()=>{
            reject(new Error(`Timed out in ${ms} ms.`))
        }, ms)
    })

    return Promise.race([promise, timeout])
}

const fetchData = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const backendData = {
                server: 'aws',
                port: 2000,
                status: 'working'
            }
            resolve(backendData)
        },ms)
    })
}

promiseTimeout(1000, fetchData(2000))
    .then(data => console.log(data))
    .catch((err)=> console.log(err))

