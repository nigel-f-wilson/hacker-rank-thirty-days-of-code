

function processData(input) {
  let array = input.split('\n')
  let T = array[0]
  for (let i = 1; i <= T; i++) {
    let n = array[i]
    if (isPrime(n)) {
      console.log(n + " Prime");
    }
    else {
      console.log(n + " Not Prime");
    }
  }
} 

function isPrime(n) {
  if (n == 0 || n == 1) return false;
  let limit = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      if (n % i == 0) {
        return false;
      }
    }
  }
  return true;
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
