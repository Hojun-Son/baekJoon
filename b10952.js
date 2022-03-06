//A+B -5
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  for (i = 0; i < num.length; i++) {
    let number = num[i].split(" ");
    a = Number(number[0]);
    b = Number(number[1]);
    if (a !== 0 && b !== 0) {
      console.log(a + b);
    } else break;
  }
  process.exit();
});
////////////////////////////////////////////////////
