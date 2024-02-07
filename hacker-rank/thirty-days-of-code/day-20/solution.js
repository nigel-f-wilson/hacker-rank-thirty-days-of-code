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
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    let totalSwaps = 0;

    for (let i = 0; i < n; i++) {
      // Track number of elements swapped during a single array traversal
      let swapsThisPass = 0;
      
      for (let j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        let current = a[j];
        let next = a[j + 1];
        if (current > next) {
          a[j] = next;
          a[j + 1] = current;
          swapsThisPass++;
        }
      }
      totalSwaps = totalSwaps + swapsThisPass;
      // If no elements were swapped during a traversal, array is sorted
      if (swapsThisPass == 0) {
        break;
      }
    }

    console.log("Array is sorted in " + totalSwaps + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length - 1]);
    
}
