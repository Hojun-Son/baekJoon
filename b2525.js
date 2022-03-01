const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input=[];

rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {
  //console.log(input);
  const current = input[0].split(" ").map(Number);
  const currentHour = current[0];
  const currentMin = current[1];
  const cookTime = Number(input[1]);

  // console.log(current);
  // console.log(currentHour);
  // console.log(currentMin);
  // console.log(cookTime);
 
  const cookEndTimeHour = parseInt(
    (currentHour * 60 + currentMin + cookTime) / 60
  );
  const cookEndTimeMin = parseInt(
    (currentHour * 60 + currentMin + cookTime) % 60
  );

  console.log(
    cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour,
    cookEndTimeMin
  );

  process.exit();
});
