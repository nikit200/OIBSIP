/*let nikit = "male";
if (nikit === "male") alert("hurray");

let firstName = "Nikit";
console.log(firstName);

let isLand = false;
let language;
let population = 140;
let country = "India";

console.log(typeof isLand);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (scoreDolphins, scoreKoalas) {
  if (scoreDolphins >= 2 * scoreKoalas) {
    console.log(`Dolphins win (${scoreDolphins} vs ${scoreKoalas}) `);
  } else if (2 * scoreDolphins <= scoreKoalas) {
    console.log(`Koalas win (${scoreDolphins} vs ${scoreKoalas}) `);
  } else {
    console.log("No one wins");
  }
};

const winner = checkWinner(scoreDolphins, scoreKoalas);
console.log(winner);
