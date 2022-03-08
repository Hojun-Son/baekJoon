// //A+B -5///////my answer
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let num = [];
// rl.on("line", function (line) {
//   num.push(line);
// }).on("close", function () {
//   for (i = 0; i < num.length; i++) {
//     let number = num[i].split(" ");
//     a = Number(number[0]);
//     b = Number(number[1]);
//     if (a !== 0 && b !== 0) {
//       console.log(a + b);
//     } else break;
//   }
//   process.exit();
// });
//////////////////////////////////////////////////// 권장 풀이
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = [];
rl.on("line", function (line) {
  num.push(line);
}).on("close", function () {
  let i = 0;
  answer = "";
  while (i <= num.length - 1) {
    let a = parseInt(num[i].split(" ")[0]);
    let b = parseInt(num[i].split(" ")[1]);
    if (a !== 0 || b !== 0) {
      answer += `${a + b}` + "\n";
    } else {
      break;
    }
    i++;
  }
  console.log(answer);
  process.exit();
});

