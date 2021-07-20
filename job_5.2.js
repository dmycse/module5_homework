// Модуль 5. Задание 2
/*
Дана переменная Х, которая может принимать любое значение. 
Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
Опишите три случая: когда х = числу, строке или логическому типу. 
В других случаях выводите сообщение: «Тип x не определён».
*/

let x;
x = 15;
if (typeof x === 'number') {
	console.log('X - число')
} else if (typeof x === 'string') {
    console.log('X - строка')
} else if (typeof x === 'boolean') {
    console.log('X - логический тип') 
} else {
    console.log('Тип X не определён')
}


// или так
let x = [];
let y = typeof x;
switch (y) {
	case 'number':
		console.log('X - число');
		break;
	case 'string':
		console.log('X - строка');
		break;
	case 'boolean':
		console.log('X - логический тип');
		break;
	default:
		console.log('Тип X не определён');
}