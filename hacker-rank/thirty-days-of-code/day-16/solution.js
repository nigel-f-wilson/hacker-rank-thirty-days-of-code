'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}


// NOTE
// I think this activity is not possible in JS 
// It requires using the built-in integer conversion method AND forbids using a conditional
// But the built in integer conversion method does not raise an error automatically for invalid inputs, instead it returns NaN
// It is simple to use a conditional to throw an error if parseInt returns NaN, but that is not allowed.


function main() {
  const S = readLine();
  
  // const converted = parseInt(S)

  // if (isNaN(converted)) {
  //   throw new Error('Bad String');
  // }
  // else {
  //   console.log(converted)
  // }

  // try {
  //   console.log(parseInt(S, 10))
  // } catch (error) {
  //   throw new Error('Bad String');
  // }

  console.assert(!isNaN(parseInt(S, 10)), "Bad String")
  console.log(parseInt(S, 10))

}
