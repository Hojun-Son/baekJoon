//평균은 넘겠지
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
  let temp = [];
  let numbers = [];
  let number = 0;
  for (let i = 1; i <= n; i++) {
    temp.push(input[i]);
  }
  for (i = 0; i < temp.length; i++) {
    let sum = 0;
    let avg = 0;
    let goodStudent = 0;
    numbers = temp[i].split(" ");
    number = numbers[0];
    for (let j = 1; j < numbers.length; j++) {
      sum += Number(numbers[j]);
    }
    avg = sum / number;
    for (j = 1; j <= numbers.length; j++) {
      if (Number(numbers[j]) > avg) {
        goodStudent++;
      }
    }
    console.log(((goodStudent / number) * 100).toFixed(3) + "%");
  }

  process.exit();
});
