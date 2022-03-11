//나머지
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
  let restNum = [];
  for (let i = 0; i < numbers.length; i++) {
    restNum.push(numbers[i] % 42);
  }
  const restNumSet = new Set(restNum);//배열 내의 중복을 없애기 위해 set 사용
  console.log(restNumSet.size);//set의 크기(원소 개수) 
  process.exit();
});
