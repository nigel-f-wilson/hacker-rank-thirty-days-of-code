function processData(input) {
  let inputArray = input.split("\n")
  let numberOfTestCases = inputArray[0]
  for (let i = 0; i < numberOfTestCases; i++) {
      let evens = inputArray[i+1].split("").filter((element, index) => index % 2 === 0).join("")
      let odds = inputArray[i+1].split("").filter((element, index) => index % 2 === 1).join("")
      console.log(`${evens} ${odds}`)
  }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
