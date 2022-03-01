//구구단 문제(for문 활용)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on("line", function (line) {
  let N = line;
  for (i = 1; i < 10; i++) {
    console.log(N + " * " + i + " = " + N * i);
  }
}).on("close", function () {
  process.exit();
});
