/**
 * 1. Write a function that takes two parameters,
 *    a and b, and returns their sum.
 */

function sum(a, b) {
  return a + b;
}

// console.log(sum(1, 2));

/**
 *  2. Create a function that takes a number as an
 *     argument and returns whether it is even or odd.
 */

function isEven(num) {
  return num % 2 == 0;
}

// console.log(isEven(2));

/**
 * 3. Implement a function that takes a string as input
 *    and returns the reversed version of that string.
 */

function reverse(str) {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
}

// console.log(reverse("String it is"));

/**
 * 4. Write a function that calculates the square
 *    of a given number.
 */

function square(num) {
  return num * num;
}

// console.log(square(4));

/**
 * 5. Create a function that takes two strings as
 *    parameters and returns their concatenation.
 */

function concat(str1, str2) {
  return str1 + str2;
}

// console.log(concat("hi", "hello"));

/**
 * 6. Implement a function that checks if a given
 *    string is a palindrome.
 */

const isPalindrome = (str) => {
  return str == str.split("").reverse().join("");
};

// console.log(isPalindrome("palinilap"));

/**
 * 7. Write a function to calculate the factorial
 *    of a non-negative integer.
 */

const factorial = (num) => {
  let fact = 1;
  for (let i = num; i >= 2; i--) {
    fact = fact * i;
  }

  return fact;
};

// console.log(factorial(5));

/**
 * 8. Create a function that takes two numbers as
 *    parameters and returns the larger of the two.
 */

const maxOfTwoNums = (a, b) => {
  return a > b ? a : b;
};

// console.log(maxOfTwoNums(1, 1));

/**
 * 9. Write a function that takes a person's name
 *    as a parameter and returns a greeting message.
 */

const greet = function (name) {
  return `Hello ${name}!`;
};

// console.log(greet("JS"));

/**
 * 10. Implement a function that takes an array of numbers
 *     and returns their average.
 */

const average = function (arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }

  const avg = sum / arr.length;
  return avg;
};

// console.log(average([1, 2, 3, 4]));
