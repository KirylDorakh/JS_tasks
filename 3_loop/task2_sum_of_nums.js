let t = 0;
let num = NaN;
console.log(t)
while (num !== 0) {
    num = prompt('Input number')
    num = +num
    t += num
}

alert(t);