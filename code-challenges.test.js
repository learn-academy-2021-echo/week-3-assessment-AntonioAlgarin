// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//a describe method to test the Fibonacci sequence
describe("fibonacci", () => {
  it("returns an array that length contains the numbers of the Fibonacci sequence", () => {
    //example input: 6
    //expected output : [1, 1, 2, 3, 5, 8]
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
    //example input: 10
    //expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
})

//ReferenceError: fibonacci is not defined

// b) Create the function that makes the test pass.

let numSeq1 = 6;
let numSeq2 = 10;

//create a function that takes in an input and iterates that many times
const fibonacci = (number) => {
  //create a variable to store the resulting array
  let numArray = [1, 1];
  //iterate through the array and have the new value equal the value of the previous index + two additional iterations
  for (let i = 2; i < number; i++){
    numArray[i] = numArray[i - 1] + numArray[i - 2];
  }
  return numArray;
};
console.log(fibonacci(numSeq1));

//PASS

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//a describe method to test that onlyOdds are returned in ascending order
describe("onlyOdd", () => {
  it("filters through the array and returns a new array of only odd numbers in ascending order", () => {
    //example input: [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    //expected output : [-9, 7, 9, 199]
    expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199]);
    //example input: ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    //expected output: [-823, 7, 23]
    expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23]);
  });
})

//ReferenceError: onlyOdd is not defined

// b) Create the function that makes the test pass.

//create a function that takes in an array
const onlyOdd = (array) => {
  let newArr = array
  //parse through the array and return values that match type number
  .filter((value) => typeof value === "number")
  //calculates whether the number is odd
  .filter((value) => {
    //use ternary operator to return value if number is odd, else null
    return value % 2 !== 0 ? value : null;
  });
    //use sort() method to return values in ascending order
    return newArr.sort((index1, index2) => index1 - index2);
};
console.log(fullArr1);

//PASS

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe("sumArray", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    expect(sumArray(numbersToAdd1)).toEqual([2, 6, 51, 60]);
    expect(sumArray(numbersToAdd2)).toEqual([0, 7, -1, 11]);
    expect(sumArray(numbersToAdd3)).toEqual([]);
  })
})

//ReferenceError: sumArray is not defined

// b) Create the function that makes the test pass.

const sumArray = (array) => {
  //declare a variable to create an empty array
  let newArray = [];
  //use reduce method to iterate through the array and add the value of the previous index to the value of the following index
  array.reduce(
    (previousValue, currentIndex, i) => (newArray[i] = previousValue + currentIndex), 0
  );
  return newArray;
};
console.log(sumArray(numbersToAdd1));
console.log(sumArray(numbersToAdd2));
console.log(sumArray(numbersToAdd3));

//PASS
