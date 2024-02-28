/**
 *
 * 1. Write a function myForEach that takes an array
 *    and a callback function and performs the same
 *    action as the forEach method.
 *
 */

function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

// myForEach([1, 2, 3, 4], (item) => {
//   console.log(item * 2);
// });

/**
 *
 * 2. Create a function myMap that takes an array
 *    and a callback function and returns a new
 *    array with the results of applying the callback
 *    to each element.
 *
 */

function myMap(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
}

const output2 = myMap([1, 2, 3, 4], (item) => {
  return item * 2;
});

// console.log(output2);

/**
 *
 * 3. Write a function myFilter that takes an array and
 *    a callback function and returns a new array containing
 *    only the elements that satisfy the callback condition.
 *
 */

function myFilter(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

const output3 = myFilter([1, 2, 3, 4], (num) => num > 2);
// console.log(output3);

/**
 *
 * 4. Create a function myReduce that takes an array,
 *    a callback function, and an initial value, and
 *    applies the callback function to reduce the array
 *    to a single value.
 *
 */

function myReduce(arr, cb, initialValue) {
  let result = initialValue;

  for (let i = 0; i < arr.length; i++) {
    result = cb(result, arr[i], i, arr);
  }

  return result;
}

let output4 = myReduce(
  [1, 2, 3, 4],
  (acc, cur) => {
    return acc + cur;
  },
  0
);

// console.log(output4);

/**
 *
 * 5. Implement a function compose that takes two
 *    functions and returns a new function that is
 *    the composition of the two.
 *
 */

function compose(fn1, fn2) {
  return (arg) => {
    return fn2(fn1(arg));
  };
}

const addFive = (num) => num + 5;
const multiplyByFive = (num) => num * 5;

const compFun = compose(addFive, multiplyByFive);
const output5 = compFun(10);
// console.log(output5);

/**
 *
 * 6. Implement a function chainFunctions that takes an
 *    array of functions and returns a new function that
 *    chains the functions together, passing the result
 *    of each as the argument to the next.
 *
 */

function chainFunctions(...fns) {
  return (arg) => {
    let output = arg;
    for (let fn of fns) {
      output = fn(output);
    }
    return output;
  };
}

const addTen = (num) => num + 10;
const subFive = (num) => num - 10;
const double = (num) => num * 2;
const square = (num) => num * num;

let chainedFn = chainFunctions(addTen, subFive, double, square);
let output6 = chainedFn(10);

// console.log(output6);

/**
 *
 * 7. Given an array of numbers, use higher-order functions
 *    to find the sum of squares of only the even numbers.
 *
 */

const arr = [10, 1, 20, 3, 2, 5, 7, 2, 10];

const sumOfSquares = arr.reduce((acc, cur) => {
  if (cur % 2 == 0) {
    acc += cur * cur;
  }
  return acc;
}, 0);

// console.log(sumOfSquares);

/**
 *
 * 8. Write a function customMap and customFilter that behave
 *    similarly to the built-in map and filter functions.
 *
 */

Array.prototype.customMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

const output7 = [1, 2, 3, 4, 5].customMap((item, index) => {
  return item * index;
});

// console.log(output7);

Array.prototype.myFilter = (cb) => {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

let output8 = ["Abcd", "abcd", "AXsdsd", "asad"].filter((item) => {
  return item.match(/[A-Z]/);
});

// console.log(output8);
