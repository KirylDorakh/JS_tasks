function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve()}, ms)
    })
}

async function counting() {
    try {
        for (let i = 1; i < 11; i ++) {
            await delay(1000)
            console.log(i)
        }
    } catch (e) {
        console.log(e)
    }
}

counting()

