const countEverySecond = (n) =>{
    let count = 1
    const interval = setInterval(() => {
        console.log(count)
        count += 1
        if (count === n + 1) {clearInterval(interval)}
    }, 1000, count, n)

}

let count = 0
const countEverySecond2 = (n) => {
    let timer = setTimeout(countEverySecond2, 1000, n)
    if(count === n) {clearTimeout(timer)}
    console.log(++ count)
}


countEverySecond2(10)
//countEverySecond(5)