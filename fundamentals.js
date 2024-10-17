/**
 * 1.   how to declare a variable using let and const
 */

const fatherName = "MD Saiful Islam";
let season = "rainy";
season = 'Summer';

// 2.   6 basic Conditions: >,<, ===,!== ,<=, >=
// 2.1  multiple conditions: &&, ||
if (fatherName === 'MD Saiful Islam' || season === 'rainy') {

}
else if (fatherName === 'MD Saiful Islam') {

}
else {

};

// 3.   Array
// 3.1  Index
// 3.2 length, push,
const numbers = [1, 3, 5, 6, 7, 8];
numbers[0] = 0;

// 4.   loop
for (let i = 0; i < numbers.length; i++) {
    const numbers = numbers[i];
    console.log(numbers);
}

// 5.   function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const outPut = multiply(2, 4);

// 6.   object
// 6.1  3 way to access property by name
const student = {
    name: 'Rakib',
    age: 26,
    location: 'Tangail'
}
const myVariable = 'age'

console.log(student.name); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable