let num = 0;
let input = 'Введите 10'

while (num <= 100){
    num = prompt(`${input}`);
    num = +num;
    switch (num) {
        case 10:
            input = 'Введите 20';
            break
        case 20:
            input = 'Введите 40';
            break
        case 40:
            input = 'Введите 80';
            break
        case 80:
            input = 'Введите 160';
            break
    }
}
alert('Thanks');


