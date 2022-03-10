//최댓값 찾기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  let numbers = num.map(Number);
  let max = numbers[0];
  let number = 0;

  for (let i = 0; i < 9; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
      number = i;//////여기서 i+1 하면 틀림..why?
    }
  }

  //console.log(`${max}\n${number}`);
  console.log(max);
  console.log(number+1);
  process.exit();
});
