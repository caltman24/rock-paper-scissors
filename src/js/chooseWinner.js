function chooseWinner(option1, option2) {
  if (option1 === option2) return "tie";
  if (option1 === "rock" && option2 === "paper")
    return { winner: option2, loser: option1 };
  if (option1 === "rock" && option2 === "scissors")
    return { winner: option1, loser: option2 };
  if (option1 === "paper" && option2 === "scissors")
    return { winner: option2, loser: option1 };
  if (option1 === "paper" && option2 === "rock")
    return { winner: option1, loser: option2 };
  if (option1 === "scissors" && option2 === "rock")
    return { winner: option2, loser: option1 };
  if (option1 === "scissors" && option2 === "paper")
    return { winner: option1, loser: option2 };
  throw new Error("Invalid options");
}

function displayWinningMessage(results) {
  if (results === "tie") return "It's a tie!";
  const { winner } = results;
  if (winner === "rock") return "Rock crushes scissors!";
  else if (winner === "paper") return "Paper covers rock!";
  else if (winner === "scissors") return "Scissors cuts paper!";
  else throw new Error("Invalid results");
}

const results = chooseWinner("rock", "paper");
console.log(displayWinningMessage(results));
