let count = 1
function countEverySecond(n){

    console.log(count++)
    if(count < 11) {setTimeout(countEverySecond,1000)}

}

countEverySecond(10)