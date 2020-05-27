/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

// checkSpam('pitterXXX@gmail.com', 'xxx'); // true
// checkSpam('pitterxxx@gmail.com', 'XXX'); // true

// exports.checkSpam = checkSpam;

const checkSpam = function(source, example) {
    if (typeof source !== 'string' && typeof example !== 'string') {
        throw new Error('Not a string')
    } 
    let string = source.toLowerCase();
    let string2 = example.toLowerCase();  
    if (string.includes(string2)) {
        return true;
    } else {
        return false;
    }
};

console.log(checkSpam('pitterXXX@gmail.com', 'xxx'))
console.log(checkSpam('pitterxxx@gmail.com', 'XXX'))
console.log(checkSpam('STASKOxxx@gmail.com', 'sTasKo'))
