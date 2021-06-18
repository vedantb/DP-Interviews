function Player(score, age) {
  this.score = score;
  this.age = age;
}
let bestTeamScore = function (scores, ages) {
  let len = scores.length;
  let players = [];
  for (let i = 0; i < len; i++) {
    players[i] = new Player(scores[i], ages[i]);
  }

  players.sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age;
    else return a.score - b.score;
  });

  let maxScore = scores[0];
  let dp = Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = players[i].score;
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (doesQualify(players[j], players[i])) {
        dp[i] = Math.max(dp[i], dp[j] + players[i].score);
      }
    }
    maxScore = Math.max(maxScore, dp[i]);
  }
  return maxScore;
};

function doesQualify(younger, older) {
  let isSameAge = younger.age === older.age;
  let isDifferentAgeAndQualified = younger.age < older.age && younger.score <= older.score;
  return isSameAge || isDifferentAgeAndQualified;
}

console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]));
console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]));
console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1]));
