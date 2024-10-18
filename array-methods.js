const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 3200, brand: 'ribon', color: 'silver' },
    { name: 'camera', price: 23000, brand: 'canon', color: 'silver' },
];

// 1.   map
const brands = products.map(product => product.brand);
console.log(brands);
const pricess = products.map(product => product.price);
console.log(pricess);
// 2.   forEach
products.forEach(product => console.log(product.color))
// 3.   filter
const cheap = products.filter(product => product.price <= 20000);
console.log(cheap);
const specificName = products.filter(product => product.name.includes("a"));
console.log(specificName);
// 4.   find
const special = products.find(product => product.name.includes("a"));
console.log(special);

const x = products[0];
console.log(x);