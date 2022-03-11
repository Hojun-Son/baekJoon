//평균
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
  let score = num[1].split(" ").map(Number);

  let max = 0;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < n; i++) {
    if (max < score[i]) {
      max = score[i];
    }
  }
  for (i = 0; i < n; i++) {
    sum += (score[i] / max) * 100;
  }
  avg = sum / n;

  console.log(avg);
  process.exit();
});
