// Модуль 5. Задание 3
/*
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH".
*/

let str = prompt('Введите слово');
if (str == null || str == '') {
	console.log('Вы ничего не ввели');
} else {
    console.log(`Перевёрнутый вариант слова: ${str.split('').reverse().join('')}`);
}