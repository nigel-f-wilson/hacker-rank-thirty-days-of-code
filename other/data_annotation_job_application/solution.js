// Explanation: 
// My code, written in JavaScript, can be executed with the following command: cat message_file.txt | node solution.js, assuming that the input file and script are both in the current working directory.  To start things off, it first reads the input file into a string, splits that string into an array at each line break, and passes that array as the one parameter to the decode() function. The decode function first filters out all the extra lines by getting the number from the beginning of each line and checking to see if it is a Triangle Number. As I explained in my previous answer, Triangle numbers are those that can be represented as the sum of consecutive integers starting from 1 and, as it happens, they are also the numbers that end up as the last number in each row when put into a "pyramid" structure. They are also the numbers that can be obtained by evaluating (n(n+1))/2 for any positive integer value of n. Based on this, I created a helper function called isTriangleNumber() that is based on a simplified version of the quadratic formula. Once I had used this to remove all the extra data, the rest of the decode function was fairly simple to write. It used a custom comparator function with the Array.sort() method, which itself reused the helper function that grabbed the number from the beginning of each line. Once the array had been put in ascending order, all that was left was to slice out just the word part of each line, ignoring the numbers, and to join those words into a string. I decided to do the filtering before the sorting because doing so boosts the efficiency of the decode function. 

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    message_file = inputString.split('\n');
    decode(message_file);
});

function decode(message_file) {
  let linesToInclude = message_file.filter(line => isTriangleNumber(lineNumber(line)))
  let sortedLines = linesToInclude.sort(compareLineNumbers)
  let decodedMessage = sortedLines.map(line => getWord(line)).join("").trim()
  console.log(decodedMessage) 
  return decodedMessage
}

// Comparator function used by sort
function compareLineNumbers(a, b) {
  return lineNumber(a) - lineNumber(b);
}

// Gets just the number part of a space-separated line with format: `number word`
function lineNumber(line) {
  return Number(line.slice(0, line.indexOf(' ')))
}

function getWord(line) {
  return line.slice(line.indexOf(' '))
}

// Based on the Quadratic formula but simplified due to the fact a and b are always equal to 1.
// A number is a triangle number if a natural number n exists such that n * (n+1) / 2 yields the number in question.
function isTriangleNumber(num) {
  let discriminant = 1 + (8 * num)
  let rootOne = (-1 + Math.sqrt(discriminant)) / 2
  let rootTwo = (-1 - Math.sqrt(discriminant)) / 2
  return (isNaturalNumber(rootOne) || isNaturalNumber(rootTwo))
}

// Checks if a number is both positive and whole.
function isNaturalNumber(num) {
  return (num > 0 && Math.floor(num) == num)
}

// Following is the original implementation of this function based on the Quadratic formula
// A simplified version is used in the real program
// function isTriangleNumber(num) {
//   let a = 1, b = 1, c = (-2 * num)
//   let discriminant = (b * b) - (4 * a * c)
//   if (discriminant < 0) {
//     return false
//   }
//   let rootOne = (-b + Math.sqrt(discriminant)) / (2 * a)
//   let rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a)

//   return (isNaturalNumber(rootOne) || isNaturalNumber(rootTwo))
// }
