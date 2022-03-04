//A+B-8
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  let testCase = Number(num[0]);
  let numbers = [];

  for (let i = 1; i <= testCase; i++) {
    numbers.push(num[i].split(" "));
    a = Number(numbers[i - 1][0]);
    b = Number(numbers[i - 1][1]);
    c = Number(a + b);

    console.log("Case #" + i + ":" + " " + a + " + " + b + " = " + c);
  }
///////////////////////////////////////////////////////////////////////////권장 풀이  
//   for (let i = 1; i <= input[0]; i++) {
//     let numbers = input[i].split(' ');
    
//     let num1 = Number(numbers[0]);
//     let num2 = Number(numbers[1]);
    
//     console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
// }
///////////////////////////////////////////////////////////////////////////  
  process.exit();
});
