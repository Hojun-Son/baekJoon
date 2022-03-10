//더하기 사이클
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = 0;
rl.on("line", function (line) {
  num = Number(line);
}).on("close", function () {
  let number = num;
  let sum = 0;
  let cnt = 0;

  while (true) {
    cnt++;
    sum = Math.floor(number / 10) + (number % 10);
    number = (number % 10) * 10 + (sum % 10);

    if (num === number) {
      break;
    }
  }
  console.log(cnt);
  process.exit();
});
