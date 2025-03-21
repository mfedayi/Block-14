// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < getLength(numbers); i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let mean = getSum(numbers) / getLength(numbers);
  return mean;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // array = 5,9,8,6,2
  let min = numbers[0]; // setting index 0 value of the array to variable
  for (i = 0; i < getLength(numbers); i++) {
    // to traverse the array

    if (min > numbers[i]) {
      // if min is greater than the next value of the array
      // then assign the value of variable with the next value of the array.
      min = numbers[i];
    }
  }
  return min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */ // array = 5,9,8,6,2
function getMax(numbers) {
  let max = numbers[0]; // setting initial value of the array to variable
  for (i = 1; i < getLength(numbers); i++) {
    // to traverse the array

    if (max < numbers[i]) {
      // if min is greater than the next value of the array
      // then assign the value of variable with the next value of the array.
      max = numbers[i];
    }
  }
  return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  const range = getMax(numbers) - getMin(numbers);
  return range;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const evens = []; //assigning empty array
  for (i = 0; i < getLength(numbers); i++) {
    if (numbers[i] % 2 === 0) {
      // the operation to fetch only even values
      evens.push(numbers[i]); // push the value to the evens array.
    }
  }
  return evens;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const odds = []; //assigning empty array
  for (i = 0; i < getLength(numbers); i++) {
    if (numbers[i] % 2 !== 0) {
      // the operation to fetch only odd values
      odds.push(numbers[i]); // push the value to the odd array.
    }
  }
  return odds;
}
