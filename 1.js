/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

// upperCaseFirst('pitter'); // Pitter
// upperCaseFirst(''); // ''

// exports.upperCaseFirst = upperCaseFirst;





const upperCaseFirst = function(string) {
    if (typeof string !== 'string') {
        throw new Error('Not a string!!!');
    }
    let firstLetterOfIndex = string.charAt(0).toUpperCase();
    const toUpperCaseFirstLetterPlusRestOfTheText = firstLetterOfIndex + string.substring(1);
    return toUpperCaseFirstLetterPlusRestOfTheText;
};
console.log(upperCaseFirst(0));



