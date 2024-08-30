// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

const calcAverage = (score) => {
    const sum = score.reduce((accumulator, currentValue) => accumulator + currentValue)
    return sum / score.length;
};

function checkWinner(dolphins, koalas) {
    if (dolphins > koalas && dolphins >= (koalas * 2))
        console.log("Dlphins win");
    else if (koalas > dolphins && koalas >= (dolphins * 2))
        console.log("Koalas win");
    else console.log("No team wins!");
}

const scoresDolphins = [44, 23, 71];
const scoresKoalas = [65, 54, 49];

const avgDolhins = calcAverage(scoresDolphins);
console.log(avgDolhins);
const avgKoalas = calcAverage(scoresKoalas);
console.log(avgKoalas);

checkWinner(avgDolhins, avgKoalas);

const scoresDolphins_2 = [85, 54, 41];
const scoresKoalas_2 = [23, 34, 27];

const avgDolhins_2 = calcAverage(scoresDolphins_2);
console.log(avgDolhins_2);
const avgKoalas_2 = calcAverage(scoresKoalas_2);
console.log(avgKoalas_2);

checkWinner(avgDolhins_2, avgKoalas_2);