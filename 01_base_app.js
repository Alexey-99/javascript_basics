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

/* const courseStatus = 'pending'; // ready, fail, pending */

/* if (courseStatus === 'ready') {
  console.log('Курс уже готов и его можно проходить');
} else if (courseStatus === 'pending') {
  console.log('Курс пока находиться на стадии разработки');
} else {
  console.log('Курс не получился');
} */

/* const isReady = true; */

/* if (isReady) {
  console.log('Всё готово');
} else {
  console.log('Всё не готово');
} */

/* isReady ?  console.log('Всё готово') : console.log('Всё не готово'); */

/* const num1 = 42; // number
const num2 = '42'; // string

console.log(num1 === num2); // (== - true (по значению)) (=== - false (по типу данных и значению)) */

// 7 булевая логика

/* && - и 
|| - или 
! - не */

/* //8 функции

function calculateAge(age) {
  return 2020 - age;
}

const myAge = calculateAge(1993);
console.log(myAge);

function logInfoAbout(name, year) {
  const age = calculateAge(year);
  console.log(mame, year);
} */

/* // 9 массивы

const cars = ['Мазда', 'Мерседес', 'Форд'];
console.log(cars);

const cars = new Array('Мазда', 'Мерседес', 'Форд');
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars.length);

cars[0] = 'Porsh';
console.log(cars);

cars[cars.length] = 'Мазда';
console.log(cars); */

/* // 10 циклы

const cars = ['Мазда', 'Мерседес', 'Форд'];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

for(let car of cars){
    console.log(car);
} */

// 11 объекты

const person = {
  firstName: 'Alexey',
  lastName: 'Koroza',
  year: '1993',
  languages: ['Ru', 'En', 'De'],
  hasWife: false,
  greet: function () {
    console.log('greet');
  }
};

console.log(person.firstName);
console.log(person['lastName']);

