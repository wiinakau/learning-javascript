let val;

const today = new Date();
const birthday = new Date('2-11-1986');
birthday = new Date('9-11-1986 11:30:00');
birthday = new Date('September 10 1986 11:30:00');
birthday = new Date('9/2/1986');

val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // timestamp

console.log(val);

birthday.setMonth(9);
birthday.setDate(2);
birthday.setFullYear(1986);
birthday.setHours(3);
birthday.setSeconds(25);

console.log(birthday);
