let a = prompt('Input a');
let b = prompt('Input b');
let c = prompt('Input c');

a = +a;
b = +b;
c = +c;

if (a > b) {
    if (a > c) {
        alert(`${a} - is greater`);
    } else {
        alert(`${c} - is greater`);
    }
} else if (b > c){
    alert(`${b} - is greater`);
} else {
    alert(`${c} - is greater`);
}