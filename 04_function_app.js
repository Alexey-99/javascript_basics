// функции

// Function Declaration
//(отличие в том что мы можем обращаться к неё когда захотим) сначала вызывается фуккция
/* greet('Лена'); */

/* function greet(name) {
  console.log('Привет -', name);
}

// Function Expretion (создаём функцию и складываем её в переменную)
const greet2 = function greet2(name) {
  console.log('Привет 2 -', name);
};
 */
/* greet2('Лена'); */

/* console.log(typeof greet);
console.dir(greet); */

/* // Анонимные функции
let counter = 0;
const interval = setInterval(function () {
  if (counter === 5) {
    clearInterval(interval);
  } else {
    console.log(++counter);
  }
}, 1000); */

/* // Стрелочные функции
function greet(name) {
  console.log('Привет - ', name);
}

const arrow = (name) => {
    console.log('Привет - ', name);
}

const arrow2 = name => console.log('Привет - ', name);

greet('Alexey');
arrow('Alexey');
arrow2('Alexey');

const pow2 = num => {
    return num ** 2;
}

const pow3 = num => num ** 2;
    
console.log(pow2(5));
console.log(pow3(5)); */

// 4 Параметры по умолчанию
/* const sum = (a, b = 7) => a + b;
console.log(sum(5));

function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}
const res = sumAll(1, 2, 3, 4, 5);
console.log(res); */

/* // 5 замыкания
function createMenber(name) {
  return function (lastName) {
    console.log(name + lastName);
  }
}

const logWithLastName = createMenber('Alexey');
console.log(logWithLastName('Koroza'));
console.log(logWithLastName('Minin')); */
