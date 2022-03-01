const readline = require("readline);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  let t = Number(num[0]); // 테스트 케이스의 개수
  let numbers = [];

  // 테스트 케이스 개수만큼 각 케이스 배열 생성 후 numbers 배열에 할당
  for (let i = 1; i <= t; i++) {
    numbers.push(num[i].split(" "));
  }
  for (let i = 0; i < t; i++) {
    a = Number(numbers[i][0]);
    b = Number(numbers[i][1]);

    console.log(a + b);
  }

  process.exit();
});
