// Create some arrays
const numbers = [43,55,11,14,76,55];
const numbers2 = new Array(22,45,33,64,23);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3]; // 14
val = numbers[0] // 43
// Insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(76); // 4

// MUTATING ARRAYS
// Add on to end 
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
//Splice values
numbers.splice(1,3); // start, end
// Reverse
numbers.reverse()

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort(); // Alphabetic orders
val = numbers.sort(); // sorted by the first number

// Use the "compare function"
val = number.sort(function(x,y) {
    return x - y;
});

// Reverse sort
val = number.sort(function(x,y) {
    return y - x;
});

// Find
function under50(num){
    return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);