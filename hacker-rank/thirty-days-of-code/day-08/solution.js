function processData(input) {
  //Enter your code here
  let inputArray = input.split("\n")
  let indexOfFirstQuery = Number(inputArray[0]) + 1
  let entries = inputArray.slice(1, indexOfFirstQuery)
  let queries = inputArray.slice(indexOfFirstQuery)

  let phoneBook = new Map()
  entries.forEach(inputLine => {
    let inputLineItems = inputLine.split(" ")
    let name = inputLineItems[0]
    let phoneNumber = inputLineItems[1]
    phoneBook.set(name, phoneNumber)
  }); 

  queries.forEach((name) => {
    let number = phoneBook.get(name)
    let message = number ? `${name}=${number}` : "Not found"
    console.log(message)
  })
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
