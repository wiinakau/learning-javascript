// FUNCTION DECLARATIONS
function greet(firstName = 'Anonymous', lastName = 'Anonymous') {
    // if (typeof firstName === 'undefined') { firstName = 'Anonymous' }
    // if (typeof lastName === 'undefined') { lastName = 'Anonymous' }
    // console.log('Hello');
    return 'Hello' + firstName + ' ' + lastName;
}
console.log(greet()); // return undefined
console.log(greet('Willian', 'Nakau'));


// FUNCTION EXPRESSIONS
const square = function(x = 3) {
    return x * x;
};
console.log(square(8));


// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function(name) {
    console.log('IIFE RAN..' + name + ' hello');
})('Willian') // add this parentheses


// PROPERTY METHODS
const todo = {
    add: function() {
        console.log('Add todo.. ');
    },
    edit: function(id) {
        console.log(`Add todo ${id}`)
    }
}

todo.delete = function() {
    console.log('Delete todo... ')
}

todo.add();
todo.edit(22);
todo.delete();