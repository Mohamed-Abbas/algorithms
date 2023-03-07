function tournamentWinner(competitions = [], results) {
  const resultsGroup = new Map();
  let maximumPoints = 0;
  let winner = "";

  for (let index = 0; index < competitions.length; index++) {
    const [home, away] = competitions[index];
    const currentRoundWinner = results[index] === 0 ? away : home;
    resultsGroup.set(
      currentRoundWinner,
      (resultsGroup.get(currentRoundWinner) || 0) + 3
    );
  }

  for (const [team, score] of resultsGroup) {
    if (score > maximumPoints) {
      maximumPoints = score;
      winner = team;
    }
  }

  return winner;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
