//빠른 A+B(for문 활용)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  let answer = [];
  for (let i = 1; i <= num[0]; i++) {
    tmp = num[i].split(" ");
    answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n";
  }

  console.log(answer);
  process.exit();
});
