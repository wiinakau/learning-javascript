const firstName = 'Willian';
const lastName = 'Nakau';
const age = 33;
const str = 'Hello there my name is Brad'
const tags = 'web design, web development, programming'
let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Willian ';
val += 'Nakau';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping 
val = 'That\'s awesome, I cant\'t wait';
val = "That's awesome, I cant't wait"; // double quotes

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Chance case
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[0]; // zero index
val = firstName[0]; // l

// indexOf()
val = firstName.indexOf('l'); // 2
val = firstName.lastIndexOf('l'); // 3

// charAt()
val = firstName.charAt('2'); // l

// Get last char
val = firstName.charAt(firstName.length - 1); // n

// substring()
val = firstName.substring(0, 4); // will

// slice()
val = firstName.slice(0,4) // will
val = firstName.slice(-3) // ian

//split()
val = firstName.split(' ');
val = tags.split(',');

// replace()
val = firstName.replace('n', 'm');

// include()
val = str.includes('foo'); // false

console.log(val);