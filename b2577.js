//숫자의 개수
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  let a = Number(num[0]);
  let b = Number(num[1]);
  let c = Number(num[2]);
  let numbers = (a * b * c).toString().split("").map(Number);

  for (let i = 0; i < 10; i++) {
    let cnt = 0;///카운트 초기화
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] == i) {
        cnt++;
      }
    }

    console.log(cnt);
  }
  process.exit();
});
