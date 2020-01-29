// var, let, const
// var name = 'Willian';
// console.log(name);
// name = 'Mari';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting); // undefined
// greeting = 'Hello';
// console.log(greeting);

// // letters, nunbers, _, $
// // Can not start with number
// // var 1name error
// var $name = 'John';
// var _name = 'Willian'; //private variables

// // Multi word vars
// var fisrtName = 'Willian' //Camel case
// var first_name = 'Mari'; // Underscore
// var FirstName = 'John'; //Pascal case
// var firstname;

// LET
// let name;
// let name = 'Willian';
// console.log(name);
// name = 'Mari';
// console.log(name);

// CONST
// const name = 'Willian';
// console.log(name);
// Can not reassign
// name = 'Mari';
// Have to assign a value
// const greeting;

const person = {
    name: 'Willian',
    age: 30
}
person.name = 'Mari';
console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
// numbers = [1,2,3,4,5,6] //error
console.log(numbers);
