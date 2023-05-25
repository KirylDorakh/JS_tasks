let a = prompt('Input a');
let b = prompt('Input b');
let c = prompt('Input c');

a = +a;
b = +b;
c = +c;

if (a ** 2 + b ** 2 === c ** 2){
    alert('Это прямоугольный треугольник!');
} else {
    alert('Это не прямоугольный треугольник!');
}