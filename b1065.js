//한수
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = Number(input);

  console.log(hansoo(n));

  function hansoo(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
      let first = i % 10;
      let second = Math.floor((i % 100) / 10);
      let third = Math.floor((i % 1000) / 100);
      if (i < 100) {
        cnt++;
      } else if (100 <= i && i < 1000) {
        if (third - second === second - first) {
          cnt++;
        }
      }
     
    }
    return cnt;
  }

  process.exit();
});
