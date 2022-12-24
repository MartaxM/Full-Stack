console.log('Hello From Node.js');

/*const person = require('./person');
console.log(person.name);*/


const Person = require('./person');
//import Person from './person'; is not possible

const person1 = new Person('John Doe', 30);



person1.greeting();