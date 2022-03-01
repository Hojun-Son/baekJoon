//알람시계 문제(if문 활용)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  let input = line.split(" ");
  ////////////////////////////////////////
  let hr = Number(input[0]);
  let mn = Number(input[1]);
  if (mn > 45 || mn == 45) {
    mn -= 45;
  } else if (mn < 45) {
    hr -= 1;
    mn = 60 - (45 - mn);
    if (hr === -1) {
      hr = 23;
    }
  }

  console.log(hr + " " + mn);
}).on("close", function () {
  process.exit();
});
