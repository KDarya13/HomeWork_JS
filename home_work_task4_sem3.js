//Задание 4
//Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
//1. Сложение
//2. Разность
//3. Умножение
//4. Деление
//Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций ////могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.


function sumOfNumber(num1, num2) {
    return num1 + num2;
}

function diffOfNumber(num1, num2) {
    return (num1 >= num2) ? num1 - num2 : num2 - num1;
}

function multOfNumber(num1, num2) {
    return num1 * num2; 
}

function divOfNumber(num1, num2) {
    return (num1 >= num2) ? num1 / num2 : num2 / num1;
}

const a = 20;
const b = 10;

console.log(sumOfNumber(a, b));
console.log(diffOfNumber(a, b));
console.log(multOfNumber(a, b));
console.log(divOfNumber(a, b));
