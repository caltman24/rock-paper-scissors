import "../scss/index.scss";

const highlightPick = (node) => {
  const activeTime = 700;
  node.classList.add("active");
  setTimeout(() => {
    node.classList.remove("active");
  }, activeTime);
};

const getComputerChoice = (choices) => {
  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  highlightPick(computerChoice);
  return computerChoice.id;
};

const checkForWin = (playerChoice, computerChoice) => {
  const isDraw = playerChoice === computerChoice;

  const rockWin = playerChoice === "rock" && computerChoice === "scissors";

  const paperWin = playerChoice === "paper" && computerChoice === "rock";

  const scissorsWin = playerChoice === "scissors" && computerChoice === "paper";

  const playerWon = rockWin || paperWin || scissorsWin;

  if (isDraw) return "draw";
  else if (playerWon) return "player";
  else return "computer";
};

const updateOutput = (winner, playerChoice, computerChoice) => {
  const green = "hsl(115, 100%, 40%)";
  const red = "hsl(0, 91%, 57%)";
  const output = document.getElementById("output-text");
  if (winner === "player") {
    output.style.color = green;
    output.textContent = `You won! ${playerChoice} beats ${computerChoice}`;
  } else if (winner === "computer") {
    output.style.color = red;
    output.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
  } else if (winner === "draw") {
    output.style.color = "black";
    output.textContent = `It's a draw!`;
  }
};

const updateScore = (winner) => {
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");
  if (winner === "player") {
    playerScoreElement.textContent =
      parseInt(playerScoreElement.textContent) + 1;
  } else if (winner === "computer") {
    computerScoreElement.textContent =
      parseInt(computerScoreElement.textContent) + 1;
  }
};

const __main__ = () => {
  const choices = document.querySelectorAll(".hands > div");
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const playerChoice = choice.id;
      const computerChoice = getComputerChoice(choices);
      const result = checkForWin(playerChoice, computerChoice);
      const updateDelay = 100;
      updateScore(result);
      setTimeout(() => {
        updateOutput(result, playerChoice, computerChoice);
      }, updateDelay);
    });
  });
};

__main__();
