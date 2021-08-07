// 1.
let car = {
  name: 'Lexus',
  age: 10,
  lastService: '1 month',
  create: 2008,
  needRepair: false,
};

const lastService = parseFloat(car.lastService);

if (!isNaN(lastService) && lastService > 5) {
  car.needRepair = 'true';
  console.log('Need Repair');
} else {
  car.needRepair = 'false';
}
// 2.
let product = {
  name: 'Яблоко',
  price: '30$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

const price = parseFloat(product.price);

if (price >= min && price <= max) {
  console.log(product.name);
} else {
  console.log('товар не найден');
}

// 3.
let string = 'JavaScript is a pretty good language';
let res = '';
for (let word = 0; word < string.length; word++) {
  if (word === 0 || string[word - 1] === ' ') {
    res += string[word].toUpperCase();
  } else if (string[word] !== ' ') {
    res += string[word];
  }
}
console.log(res);

// 4.
function doubleArray(arr) {
  return arr.concat(arr);
}
doubleArray([1, 2, 3]);
console.log(doubleArray);

// 5.
function changeCollection() {
  const res = [];

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      const el = arguments[i].slice();
      el.shift();
      res.push(el)
    }
  }

  return res;
}

console.log(changeCollection([1, 2, 3]))

//. 6


function funcGetUsers(arr, key, value) {
  if (!Array.isArray(arr)) return new Error('The first argument should be an array');
  if (typeof key !== "string" || key === '') return new Error('The key should be a valid string');
  if (value === undefined || value === null) return new Error('The value should be a valid value.');

  const res = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      res.push(arr[i])
    }
  }

  return res;
}

// console.log(filterUsers(users, "age", 36));

// 7.

const obj = {};

(function (x) {
  x.b = 1;
  x = null;
})(obj);
console.log(obj);
// значение функции не известно (x = null) но при этом функция (x) добавляет в исходный объект параметр b = 1. До включения функции объект не имел ни единого параметра.

// 8.

const price23 = {
  price: 10,
  dioscount: '15%',
  getPrice() {
    return this.price;
  },
  getPriceWithDiscount() {
    const dioscount = parseFloat(this.dioscount);
    const priceWithDiscount = this.price - (this.price * (dioscount / 100));
    return priceWithDiscount;
  }
};

// 9.

let sizes = {
  width: 5,
  height: 10,
},
  getSquare = function () {
    return this.width * this.height
  };
getSquare.call(sizes);


