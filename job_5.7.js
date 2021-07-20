// Модуль 5. Задание 7
/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее.
*/

let arr = ['строка', 22, 0, 'вторая строка', 198, 46, 75, 0, 53, null, 286, 0];
let countEven = 0, countOdd = 0, countZero = 0, countNotNumber = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
         countNotNumber++; 
     } else if (arr[i] == 0) {
        countZero++;  
    } else if (arr[i] % 2 == 0) {
        countEven++; 
    } else { 
        countOdd++;
    }    
}
console.log(`Чётных элементов: ${countEven}`);
console.log(`Нечётных элементов: ${countOdd}`);
console.log(`Нулей: ${countZero}`);


// или так
let arr = ['строка', 22, 0, 'вторая строка', 198, 46, 75, 0, 53, null, 286, 0];
let countEven = 0, countOdd = 0, countZero = 0, countNotNumber = 0;
arr.forEach(function(item) {
    if (typeof item !== 'number') {
         countNotNumber++; 
     } else if (item == 0) {
        countZero++;  
    } else if (item % 2 == 0) {
        countEven++; 
    } else { 
        countOdd++;
    }    
})
console.log(`Чётных элементов: ${countEven}`);
console.log(`Нечётных элементов: ${countOdd}`);
console.log(`Нулей: ${countZero}`);
