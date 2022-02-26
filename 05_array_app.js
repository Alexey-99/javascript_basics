// Массивы
/* const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес'];
const fib = [1, 1, 2, 3, 5, 8, 13]; */
/* const people = [
    {name: 'Alexey', budget: 4200},
    {name: 'Ivan', budget: 3500},
    {name: 'Victoria', budget: 1700}
] */

/* console.log(cars);
console.log(fib); */

/* // function
function addItemToEnd() {} */

/* // method
                                                push()
cars.push('Рено'); //push() - добавление элемента в конец массива
console.log(cars);
                                                unshift()
cars.unshift('Волга'); //unshift() - добавление элемента в начало массива
console.log(cars);
                                                shift()
const firstItem = cars.shift(); //shift() - возвращает и удаляет первый элемент массива
console.log(cars);
console.log(firstItem);
                                                 pop()
const lastCar = cars.pop(); //pop() - возвращает и удаляет последний элемент массива
console.log(cars);
console.log(lastCar); */

//                                               reverse()
/* console.log(cars.reverse()); // мутирует (переворачивает) массив ['Мерседес', 'БМВ', 'Форд', 'Мазда'] */

//                                                indexOf()
/* const index = console.log(cars.indexOf('БМВ')); // indexOf() - работает с примитивными типами данных */
/* const index = cars.indexOf('БМВ');
console.log(cars[index]);
cars[index] = 'Porsh'
console.log(cars); */

/*                                                // findIndex()
const index = people.findIndex(function(person){ // findIndex() - работает с объектами
    console.log(person);
    return person.budget === 3500;
});
console.log(index);
console.log(people[index]);
  */

/*                                               // find()
const person = people.find(function(person){ // find() - работает с объектами и находит сразу нужного человека
    return person.budget === 3500;
});
console.log(person);
                    
// метод find() делает тоже что и цикл ниже

let findPerson;
for(const person of people){
    if (person.budget === 3500){
        findPerson = person;
    }
}
console.log(person);

// метод find() делает тоже что и цикл ниже

const person = people.find(person => person.budget === 3500)
console.log(person);
  */

/* //                                                includes()
console.log(cars.includes('Мазда!')); // метод includes() - ищет элемент в массиве и возвращает true / false 
  */

/* //                                                  toUpperCase()

const upperCaseCars = cars.map(car => {        // метод map() - принимает функцию и возвращает новый массив
    return car.toUpperCase()                   // метод toUpperCase() - возводит элементы в верхний регистр
})

const pow2Fib = fib.map(num => num ** 2);

const pow2 = num => num ** 2;
const pow2Fib2 = fib.map(pow2).map(Math.sqrt);

console.log(upperCaseCars);
console.log(cars);
console.log(pow2Fib);
console.log(pow2Fib2); */

/* //                                                       filter()
const pow2 = num => num ** 2;
const pow2Fib = fib.map(pow2)
const filteredNumbers = pow2Fib.filter(num => {
    return num > 20;
})
console.log(pow2Fib);
console.log(filteredNumbers);
 */

/* //                                           filter(), reduce()
const people = [
  { name: 'Alexey', budget: 4200 },
  { name: 'Ivan', budget: 3500 },
  { name: 'Victoria', budget: 1700 },
];

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);
console.log(allBudget); */

/* // задача 1
const text = 'Привет, мы изучаем JavaScript';
const reverseText = text.split('').reverse().join('');
console.log(reverseText);
 */
