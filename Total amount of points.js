/*
https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript 
*/
function points(games) {
  let totalPoints = 0;
  for (let i = 0; i < games.length; i++) {
    const match = games[i];
    const [ourScore, opponentScore] = match.split(":").map(Number);
    if (ourScore > opponentScore) {
      totalPoints += 3;
    } else if (ourScore === opponentScore) {
      totalPoints += 1;
    }
  }
  return totalPoints;
}
