//주사위 문제(if문 활용)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let diceNum = [];

rl.on("line", function (line) {
  diceNum = line.split(" ");

  //console.log(diceNum);
  const firstNum = Number(diceNum[0]);
  const secondNum = Number(diceNum[1]);
  const thirdNum = Number(diceNum[2]);
  var reward = 0;

  // console.log(firstNum);
  // console.log(secondNum);
  // console.log(thirdNum);

  if (firstNum == secondNum && secondNum == thirdNum) {
    reward = 10000 + firstNum * 1000;
  } else if (firstNum == secondNum) {
    reward = 1000 + firstNum * 100;
  } else if (secondNum == thirdNum) {
    reward = 1000 + secondNum * 100;
  } else if (firstNum == thirdNum) {
    reward = 1000 + firstNum * 100;
   } else {
     const biggestNum = [firstNum, secondNum, thirdNum].sort();
     reward = biggestNum[2]*100
   } 
  ///////////////////////////////////////////////////////////////처음풀이
  //else if (firstNum > secondNum && firstNum > thirdNum) {
  //   reward = firstNum * 100;
  // } else if (secondNum > firstNum && secondNum > thirdNum) {
  //   reward = secondNum * 100;
  // } else if (thirdNum > secondNum && thirdNum > firstNum) {
  //   reward = thirdNum * 100;
  // }
////////////////////////////////////////////////////////////////
  console.log(reward);
}).on("close", function () {
  process.exit();
});
