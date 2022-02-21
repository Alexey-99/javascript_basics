/* 1 переменные */

/* const firstName = 'Alexey'
const lastName = 'Koroza' // String
const age = 22; // number
const isProgrammer = true; // boolean

console.log(lastName); */

// 2 мультирование
/* console.log('Имя чловека: ' + firstName + ' , а возрост человека: ' + age);
console.log(age);

alert('Имя чловека: ' + firstName + ', а возрост человека: ' + age);

const lastName = prompt('Введите фамилию');
alert(firstName + ' ' + lastName); */

// 3 опреаторы

/* const currentYear = 2020;
const birthYear = 1993;

const age = currentYear - birthYear;
console.log(age); */

// 4 типы данных

/* const isProgrammer = true;
const name = 'Alexey';
const age = 22;
let x;
null;
console.log(typeof isProgrammer);
console.log(typeof name);
console.log(typeof age);
console.log(typeof x);
console.log(typeof null);
console.log(null); */

// 5 переоритет операторов
/* const fullAge = 26;
const birthYear = 1993;
const currentYear = 2020;

const isFullAge = currentYear - birthYear >= fullAge
console.log(isFullAge); */

// 6 условные операторы

const courseStatus = 'pending'; // ready, fail, pending

if (courseStatus === 'ready') {
  console.log('Курс уже готов и его можно проходить');
}if(courseStatus === 'pending'){
console.log('Курс пока находиться на стадии разработки');
}
