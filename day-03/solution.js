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



function main() {
    const N = parseInt(readLine().trim(), 10);
    
    var isOdd = N % 2 === 1
    var isInWeirdEvenRange = (N >= 6 && N <= 20)
    
    var message = (isOdd || isInWeirdEvenRange) ? 'Weird' : 'Not Weird'
    
    console.log(message)
}
