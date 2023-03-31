/*Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/


const arr = [];
let min = 0;
let max = 9;
let length = 5;
for (let i = 0; i < length; i++) {
    arr.push(Math.round(Math.random() * (max - min) + min));
}
console.log(arr);

const resSum = arr.reduce((acc, num) => acc + num);
console.log(`Сумма чисел в массиве = ${resSum}`);

const resMin = arr.reduce((acc, el) => {return Math.min(acc, el)});
console.log(`Наименьшее число в массиве = ${resMin}`);

arr.forEach((num, i) => num === 3 ? console.log(`Число 3 находится на позиции ${i} в массиве`) : console.log(`Число с индексом ${i} не равно 3`));
