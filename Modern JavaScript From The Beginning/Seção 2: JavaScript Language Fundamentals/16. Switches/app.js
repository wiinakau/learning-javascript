const color = 'red';

switch (color) {
    case 'red':
        return console.log('Color is red');
    case 'blue':
        return console.log('Color is blue');
    case 'yellow':
        return console.log('Color is yellow');
    default:
        return console.log('Color is black');
}

switch (new Date().getDate()) {
    case 0 :
        day = 'Sunday';
        break;
    case 1 :
        day = 'Monday';
        break;
    case 2 :
        day = 'Tuesday';
        break;
    case 3 :
        day = 'Wednesday';
        break;
    case 4 :
        day = 'Thursday';
        break;
    case 5 :
        day = 'Friday';
        break;
    case 6 :
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`)