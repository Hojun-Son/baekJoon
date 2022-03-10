//최댓값 최솟값 구하기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  let number = Number(num[0]);
  let numbers = num[1].split(" ");
  let realNumbers = numbers.map(Number);

  let max = Math.max.apply(null, realNumbers);
  let min = Math.min.apply(null, realNumbers);


  console.log(min + " " + max);

  process.exit();
});

///////////////////////////////////// 다른풀이
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let num = [];
// rl.on("line", function (line) {
//   num.push(line);
// }).on("close", function () {
//   let count = Number(num[0]);
//   let fakeNumbers = num[1].split(" ");
//   let numbers = fakeNumbers.map(Number);

//   let max = numbers[0];
//   let min = numbers[0];

//   for (let i = 1; i < count; i++) {
//     if (max < numbers[i]) {
//       max = numbers[i];
//     }

//     if (min > numbers[i]) {
//       min = numbers[i];
//     }
//   }

//   console.log(`${min} ${max}`);
//   process.exit();
// });
