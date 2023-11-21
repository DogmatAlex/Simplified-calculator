
while (true) {
    let num1 = Number(prompt('Введите первое число'));
    if (isNaN(num1)) {
        alert('Неккоректный ввод! Попробуйте ещё раз')
        continue;
    }

    let option = prompt('Введите опцию (+, -, *, /)');
    if (option !== '+' && option !== '-' && option !== '*' && option !== '/') {
        alert('Некорректная операция! Используйте только +, -, * или /');
        continue;
    }

    let num2 = Number(prompt('Введите второе число'));
    if (isNaN(num2)) {
        alert('Неккоректный ввод! Попробуйте ещё раз')
        continue;
    }


let result;
switch (option) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;            
}

alert('Результат: ' + result)
}








// if (option === '+') {
//     result = num1 + num2;
// } else if (option === '-') {
//     result = num1 - num2;
// } else if (option === '*') {
//     result = num1 * num2;
// } else if (option === '/') {
//     if (num2 === 0) {
//         result = alert('На ноль делить нельзя!');
//     } else {
//     result = num1 / num2;
//     }
// } else {
//     result = alert('Неверная операция');
// }

// alert('Результат: ' + result)






