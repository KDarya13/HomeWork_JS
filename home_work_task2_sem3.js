//Задание 2
//Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
//Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const userVar = prompt('Введите размер заработной платы');

if (typeof userVar === 'string') {
    console.log('Значение задано с ошибкой');
}

function wagesWithoutTax(numWages) {
    let tax = (numWages*13) / 100;
    return numWages - tax;
}

console.log(wagesWithoutTax(userVar));