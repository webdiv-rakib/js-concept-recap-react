const person = {
    name: "Lal Nil Holud Mia",
    profession: "Traffic Surgeon",
    age: 39,
    address: "Shahabag",
    25: 'Summer',
    'son-name': 'Sunny'
}
// dot notation
const prof1 = person.name;

// bracket notation
const prof2 = person['profession'];
const pName = 'profession';
const prof3 = person[pName];
console.log(prof3);
console.log(prof2);

const season = person[25];
console.log(season);

const son = person['son-name'];
console.log(son);

