// 1.   array destructuring
const numbers = [42, 65];
const x = numbers[0];
const y = numbers[1];

const [h, q] = [10, 20];
console.log(x, y);
console.log(h, q);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
};
console.log(boxify(15, 25));

function numberList(x1, x2, x3, x4, x5) {
    const number = [x1, x2, x3, x4, x5];
    return number;
};
console.log(numberList(2, 4, 6, 8, 10));

const [first, second, third, fourth, fifth] = [11, 12, 13, 14, 15];
console.log(first, second, third, fourth, fifth);

const student = {
    name: 'Alif',
    age: 26,
    movies: ["King Khan", "Dhakar Mastan"]
};
const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie);

// object destructuring
const { name, age } = { name: 'alu', age: 14 };
const { id, age2 } = { id: 12, age: 14 };

const employee = {
    ide: 'VS Code',
    designation: 'Developer',
    machine: 'Mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Tangail',
        drink: 'Water',
        laptop: {
            brand: 'Gigabyte',
            price: 95000,
            processor: 'i5',
            ram: '16Gb',
            gpu: 'RTX 3050',
            ssd: '1TB'
        }
    }
};

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const [language1, language2] = employee.language[0, 1];
const { brand, ssd } = employee.specification.laptop;
const { brand1, ssd1 } = employee?.specification?.laptop;
console.log(brand, ssd);
