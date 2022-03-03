// 기찍N
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = "";
rl.on("line", function (line) {
  num = line.split(" ");
}).on("close", function () {
  let answer = [];
  let a = [];
  for (let i = 1; i <= num[0]; i++) {
    answer.push(i);
    if (i == num[0]) {
      for (let j = 1; j <= num[0]; j++) {
        a += answer.pop() + "\n";
      }
    }
  }
  console.log(a);
  process.exit();
});
