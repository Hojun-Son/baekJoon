//X보다 작은수
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  let number = num[0].split(" ");
  let numbers = num[1].split(" ");
  let N = Number(number[0]);//Number 안하면 숫자 비교할 때 문제생김
  let X = Number(number[1]);
  let answer = [];

  for (let i = 0; i < N; i++) {
    if (numbers[i] < X) {
      answer += (numbers[i] + " ");
    }
  }
  console.log(answer);
  process.exit();
});
