'use strict'

let num = prompt('Number 0 to 2.000.000');
let out = document.querySelector('.out');
let i = 1;

for (; i <= num; i++) {

  if (i % 2 == 0) {
    out.textContent += `${i} ` ;
  }
}

let numLength = Math.floor((i - 1) / 2);
out.textContent += `Total numbers: ${numLength}`;


/* 
Написать приложение которое через prompt заращивает число от 0 до 2 000 000, и выводит количество четных чисел в этом числе в div блок

Пример число 10 введено
В нем 2 4 6 8 10 четные числа
Всего чисел 5, ответ 5

*/