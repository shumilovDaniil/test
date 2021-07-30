'use strict'

let arr =  [4, 3, 10, 14, 32];

// some

let arrSome = arr.some(function(b){
  return b < 5;
})
console.log(arrSome);


// split

let arr2 = '4 3 10 14 32';
let splits = arr2.split(' ', 3);

console.log(splits);

// include

console.log(arr.includes(10)); // true
console.log(arr.includes(9999)); // false

// map

let arrMap = arr.map(function(x, y, z){
  return x * 2; 
});

console.log(arrMap);

// reduce 

let arrReduce = arr.reduce(function(a, b){
  return a + b;
});

console.log(arrReduce); // 63

// forEach

arr.forEach(element => console.log(element));

// filter 

function isBig(i) {
  return i >= 5;
}

let arrFilter = arr.filter(isBig);
console.log(arrFilter);

// find 

function enoughNum(i) {
  return i == 10;
}

let arrFind = arr.find(enoughNum);
console.log(arrFind);

// findIndex

function enoughNum(i) {
  return i == 10;
}

let arrFindIndex = arr.findIndex(enoughNum);
console.log(arrFindIndex); // 2 index (10)

/* 

Some split include map reduce forEach filter find findIndex

так же из массива [ 4, 3, 10, 14, 32]

напиши программы для реализации каждого метода
масив можешь увеличить или изменить

для сплит возьми строку с пробелами пример "4 3 10 14 32"

forEach можешь не трогать:)

*/
