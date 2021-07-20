// Модуль 5. Задание 8
/*
Создайте произвольный массив Map.
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/

let myArr = new Map ([
	['А', 'ВС'],
	[ 11, 'DE'],
	['C', 'FG'],
	[true,  33 ]
]);
console.log('Ключи массива:');  
for (let key of myArr.keys()) {
 console.log(`${key}`);
}
for (let pair of myArr) {
 console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}