//Задание 3
//Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function searchMaxNumber(a, b, c) {
    return Math.max(a, b, c);
}

let num1 = +prompt('Input first number');
let num2 = +prompt('Input second number');
let num3 = +prompt('Input third number');
console.log(searchMaxNumber(num1, num2, num3));
