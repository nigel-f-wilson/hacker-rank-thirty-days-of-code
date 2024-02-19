function processData(input) {
  //Enter your code here
  let [returnedDate, dueDate] = input.split("\n")

  let [returnedDay, returnedMonth, returnedYear] = returnedDate.split(" ")
  let [dueDay, dueMonth, dueYear] = dueDate.split(" ")

  let yearsLate = returnedYear - dueYear;
  let monthsLate = returnedMonth - dueMonth;
  let daysLate = returnedDay - dueDay;

  if (yearsLate > 0) {              // Returned a calendar year or more late
    console.log("10000");
  }
  else if (yearsLate < 0) {         // Returned one or more calendar years early
    monthsLate = returnedMonth - dueMonth - 12;
    if (monthsLate > 0) {
      console.log(monthsLate * 500);
    }
    else if (monthsLate < 0) {
      daysLate = returnedDay - dueDay - 31;
      if (daysLate > 0) {
        console.log(daysLate * 15);
      }
      else {
        console.log(0);
      }
    }
    else {
      console.log(daysLate * 15);
    }
  }
  else {                            // Returned in same year as due
    if (monthsLate > 0) {
      console.log(monthsLate * 500);
    }
    else if (monthsLate < 0) {
      console.log(0);
    }
    else if (monthsLate == 0) {
      console.log(daysLate * 15);
    }
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



