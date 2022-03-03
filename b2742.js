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
  let answer = '';

for (let i = num; i >= 1; i--) {
    answer += i + "\n";
}

console.log(answer);
  process.exit();
});
