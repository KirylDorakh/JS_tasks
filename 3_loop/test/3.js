let num = 0;
let message = "Введите 10";

while(num < 101){
    num = prompt(message)
    switch(+num){
        case 10:
            message = `Введите ${num * 2}`;
            break;
        case 20:
            message = `Введите ${num * 2}`;
            break;
        case 40:
            message = `Введите ${num * 2}`;
            break;
        case 80:
            message = `Введите ${num * 2}`;
            break;
    }
}

alert('thanks')
