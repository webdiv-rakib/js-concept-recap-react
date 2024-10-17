const numbers = [1, 3, 5, 6, 7, 8];
const student = {
    name: 'Rakib',
    age: 26,
    location: 'Tangail',
    movies: ['avatar', 'transformar']
}

// 1.   template string
const aboutMe = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also like movies ${student.movies[0]}`
console.log(aboutMe);

// 2.   arrow function
const getFiftyFive = () => 55;
const addSixtyFive = number => number + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const multiLine = (num1, num2) => {
    const result = num1 + num2;
    return result;
}

// 3.   spread operator
const newNumbers = [...numbers];
// 4.   create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];
numbers.push(22);
numbers.push(32);
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);