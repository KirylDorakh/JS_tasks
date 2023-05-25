function countEverySecond(n){
    let i = 1
    const interval = setInterval(() => {
        console.log(i);
        i ++;
    }, 1000)

    setTimeout(()=>{
        clearInterval(interval)
    }, (n + 1) * 1000)


}

//countEverySecond(10)

// or
function countEverySecond2(n){
    let count = 1;
    const interval = setInterval(() => {
        console.log(count++)
        if (count === n){
            clearInterval(interval);
        }
    }, 1000)

}

countEverySecond2(10)