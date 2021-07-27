// src in another file
// just like <script src="./people.js">
let people = require('./people');
let mersenne = require('./cohorts/mersenne');
let fiat = require('./car');
let menu = require('./menu');
let add = require('./add');
let calculator = require('./calculator');


let result = add(3,7);
console.log(' 3 + 7 = ', result);

console.log('15/3 =', calculator.divide(15,3))

console.log(calculator.count());
console.log(calculator.count());
console.log(calculator.count());
console.log(calculator.count());
console.log(calculator.count());



console.log('drinks', menu.drinks);
console.log('food', menu.food);

console.log('from car.js', fiat);
console.log('from people.js', people);
console.log('from mersenne.js', mersenne);
for (let person of people){
    console.log(`Hello, ${person}! Welcome to Node-Land`);


    if ( person[0] === 'F'){
        console.log('Picking on Farah Today');
    }
}
