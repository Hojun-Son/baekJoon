//ox퀴즈
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = Number(input[0]);
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(input[i]);
  }
  for (i = 0; i < n; i++) {
    let cnt = 0;
    let score = 0;
    for (let j = 0; j < result[i].length; j++) {
      if (result[i][j] == "O") {
        cnt++;
      } else {
        cnt = 0;
      }

      score += cnt;
    }

    console.log(score);
  }

  process.exit();
});
