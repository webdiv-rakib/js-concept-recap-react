// 1.   JSON => stringify and parse
const student = {
    name: 'Rakib',
    age: 26,
    location: 'Tangail',
    movies: ['avatar', 'transformar']
}
// object to convert js object notation
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
// js object notation to object
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2.   fetch
const fetch = () => {
    fetch('')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

// 3.   object keys and values
const keys = Object.keys(student)
console.log(keys);
const values = Object.values(student);
console.log(values);

// 4.   for
const numbers = [1, 4, 7, 9, 3, 10];
numbers.forEach(num => console.log(num))
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in 

// add or remove from an array
const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 3200, brand: 'ribon', color: 'silver' },
    { name: 'camera', price: 23000, brand: 'canon', color: 'silver' },
];
const newProduct = { name: "webcam", price: 1200, brand: 'lal', color: 'black' }
// copy product array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);