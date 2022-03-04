// 별찍기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  let number = Number(num[0]);
  for (let i = 1; i <= number; i++) {
    console.log("*".repeat(i));
  }
  process.exit();
});
