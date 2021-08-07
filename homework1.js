let string = 'some test string';

// 1.
const firstLastUpper = `${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toUpperCase()}`;
console.log(firstLastUpper);

// 2.
const stringPosition = string.indexOf('string');
console.log(stringPosition);

// 3.
const lastSpace = string.lastIndexOf(' ');
console.log(lastSpace);

// 4.
const sliceString = string.slice(5, 9);
console.log(sliceString);

// 5.
let num1;
num1 = Math.PI;
num1 = num1.toFixed(2);
console.log(num1);

// 6.
let numbers;
numbersMax = Math.max(15,11,16,12,51,12,13,51);
numbersMin = Math.min(15,11,16,12,51,12,13,51);
console.log(numbersMax);
console.log(numbersMin);

// 7.
let num2;
num2 = Math.random();
num2 = num2.toFixed(2);
console.log(num2);

// 8.
let num3;
num3 = Math.floor(Math.random() * 100 + 1);
console.log(num3);

// 9.
let num13;
num13 = (0.6 * 10 + 0.7 * 10) / 10;
console.log(num13);

// 10.
let product = {
  product: 'iPhone',
};
console.log(product);

// 11.
product.price = '1000';
product.currency = 'dollar';

// 12.
product.details = ['model', 'color'];


