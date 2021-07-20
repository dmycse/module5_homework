// Модуль 5. Задание 5
/*
Дан произвольный массив. Необходимо вывести количество элементов массива, 
затем перебрать его и вывести в консоль каждый элемент массива.
*/

let arr = ['One hundred', 150, 'Two hundred', 250, 'Three hundred', 350];
console.log(`Количество элеметов массива: ${arr.length}\nЭлементы массива:`);
arr.forEach((item, index, array) => {
    console.log(`Element ${[index]}: ${arr[index]}`);
});


// или так
let arr = ['One hundred', 150, 'Two hundred', 250, 'Three hundred', 350];
console.log(`Amount of array elements: ${arr.length}`);
console.log('Array elements:');
for (let i = 0; x < arr.length; i++) {
    console.log(`Element ${[i]}: ${arr[i]}`);
}


// или так
let arr = ['One hundred', 150, 'Two hundred', 250, 'Three hundred', 350];
console.log(arr.length);
for (let item of arr) {
    console.log(item);
}


// или так
let arr = ['One hundred', 150, 'Two hundred', 250, 'Three hundred', 350];
console.log(`Amount of array elements: ${arr.length}\nArray elements:`);
let result = arr.map(function(item) {
    console.log(item);
 });
