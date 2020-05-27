// * Задача 3.
//  *
//  * Создайте функцию truncate(string, maxLength).
//  * Функция проверяет длину строки string.
//  * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
//  * Результатом функции должна быть (при необходимости) усечённая строка.
//  *
//  * Условия:
//  * - Функция принимает два параметра;
//  * - Функция содержит валидацию входных параметров;
//  * - Первый параметр должен обладать типом string;
//  * - Второй параметр должен обладать типом number.
//  */

// // Решение

// truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

// exports.truncate = truncate;

const truncate = function(string) {
    const maxLength = string.length;
    const sliced = string.slice(21, maxLength);
    const replaced = string.replace(sliced, '...');
    return replaced

}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:'));


