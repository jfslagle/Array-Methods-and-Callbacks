// Makes fifaData. fifaData is an array of game objects.
import { fifaData } from "./fifa.js";
// console.log(fifaData);

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// Declares variable matchesOf2014. Sets matchesOf2014 to an array that filters fifaData for "matches" during year 2014.
const matchesOf2014 = fifaData.filter(
  (individualMatchesOfAllTime) => individualMatchesOfAllTime.Year == 2014
);

// Declares variable lastMatchOf2014. Sets lastMatchOf2014 to one element of all time and finds the first element that returns true.
const lastMatchOf2014 = matchesOf2014.find(
  (individualMatchesOfAllTime) => individualMatchesOfAllTime.Stage == "Final"
);

const array1 = [1, 2, 3, 4];
const array2 = ["poots", "toots", "pooper", "scooper"];
const array3 = [
  { Year: 2014, Stage: "Final" },
  { Year: 2010, Stage: "Final" },
];

//(a) Home Team name for 2014 world cup final
console.log("Task 1a -----> " + lastMatchOf2014["Home Team Name"]);

//(b) Away Team name for 2014 world cup final
console.log("Task 1b -----> " + lastMatchOf2014["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final
console.log("Task 1c -----> " + lastMatchOf2014["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final
console.log("Task 1d -----> " + lastMatchOf2014["Away Team Goals"]);

//(e) Winner of 2014 world cup final */
if (lastMatchOf2014["Away Team Goals"] < lastMatchOf2014["Home Team Goals"]) {
  console.log(lastMatchOf2014["Home Team Name"]);
} else {
  console.log(lastMatchOf2014["Away Team Name"]);
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  return data.filter((element) => element.Stage === "Final");
}
console.log("getFinals", getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {
  const finalGames = getFinals(fifaData);
  return finalGames.map((game) => game.Year);
}

const years = getYears(getFinals);
console.log(years);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinner(game) {
  if (game["Home Team Goals"] > game["Away Team Goals"]) {
    return game["Home Team Name"];
  } else {
    return game["Away Team Name"];
  }
}

function getWinners(getFinals) {
  const theFinals = getFinals(fifaData);
  return theFinals.map(getWinner);
}
const winners = getWinners(getFinals);
console.log("The winners of the finals were " + winners);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getYears, getWinners) {
  const years = getYears(getFinals);
  const winners = getWinners(getFinals);
  const weCheer = years.map((element, i) => {
    return `In ${element}, ${winners[i]} won the world cup!`;
  });
  return weCheer;
}
console.log(getWinnersByYear(getYears, getWinners));

// function getWinnersByYear(year, country) {

// };

// getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  const avgHomeGoals =
    data.reduce((goals, match) => goals + match["Home Team Goals"], 0) /
    data.length;
  const avgAwayGoals =
    data.reduce((goals, match) => goals + match["Away Team Goals"], 0) /
    data.length;
  return `Average Home Team Goals: ${avgHomeGoals.toFixed(
    2
  )} - Average Away Team Goals: ${avgAwayGoals.toFixed(2)}`;
}

console.log(getAverageGoals(fifaData));

// function getAverageGoals(/* code here */) {

//     /* code here */

// };

// getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
