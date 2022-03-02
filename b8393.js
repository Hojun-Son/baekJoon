// 입력값 n까지의 합 구하기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  let n = Number(num[0]); 
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
  process.exit();
});
