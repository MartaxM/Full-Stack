// console.log('Hello From Node.js');

// /*const person = require('./person');
// console.log(person.name);*/


// const Person = require('./person');
// //import Person from './person'; is not possible

// const person1 = new Person('John Doe', 30);



// person1.greeting();

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');