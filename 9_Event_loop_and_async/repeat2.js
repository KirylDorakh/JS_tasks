function countEverySecond(n){
    let count = 1
    let result = setInterval(()=>{
        console.log(count)
        count++
        if (count > 10) {
            clearInterval(result)
        }
    }, 1000)

}

countEverySecond(10)