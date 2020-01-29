const person = {
    fisrtName: 'Willian',
    lastName: 'Nakau',
    age: 33,
    email: 'wii.nakau@gmail.com',
    hobbies: ['music', 'sports'],
    adress: {
        city: 'São Paulo',
        state: 'São Paulo'
    },
    getBirthYear: function() {
        return 2019 - this.age;
    }
}

let val;
val = person;

// Get specific value
val = person.fisrtName;
val = person['fisrtName'];
val = person.age;
val = person.hobbies[1];
val = person.adress.city;
val = person.adress['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'Willian', age: 33},
    {name: 'Mari', age: 34},
    {name: 'Yuto', age: 10}
];

for (let i = 0; i < people.length; i++){
    console.log(people[i].name);
}