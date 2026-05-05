// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//   if (counter === 5) {
//     break;
//   }
//   result = result * 2;
//   console.log(result);
// }

// let day = "Thursday";

console.log(5 + 2);

// if (day === "Monday") {
//   console.log("Today is Monday");
// } else if (day === "Tuesday") {
//   console.log("Today is Tuesday");
// } else if (day === "Wednesday") {
//   console.log("Today is Wednesday");
// } else if (day === "Thursday") {
//   console.log("Today is Thursday");
// } else if (day === "Friday") {
//   console.log("Today is Friday");
// } else if (day === "Saturday") {
//   console.log("Today is Saturday");
// } else {
//   console.log("Today is Sunday");
// }

// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "Thursday":
//     console.log("Today is Thursday... Which is Lamide's Wedding");
//     break;
//   case "Friday":
//     console.log("Today is Friday");
//     break;
//   case "Saturday":
//     console.log("Today is Saturday");
//     break;
//   default:
//     console.log("Today is Sunday");
// }

// Exercise 1

// let result = "";

// for (let i = 1; i < 8; i++) {
//   result = result + "#";

//   console.log(result);
// }

// Exercise 2
let chessBoard = "";
for (let i = 0; i < 8; i++) {
  let line = "";
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
      line = line + " ";
    } else {
      line = line + "#";
    }
  }
  chessBoard = chessBoard + line + "\n";
}
console.log(chessBoard);
