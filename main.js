let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  const choice = choices[randomChoice];
  return choice;
};

const startGame = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = "rock".toLowerCase();
    const computerSelection = getComputerChoice();

    const playRound = (player, computer) => {
      if (player === computer) {
        return "None";
      } else if (player === "rock" && computer === "scissors") {
        playerScore++;
        return "Player";
      } else if (player === "paper" && computer === "rock") {
        playerScore++;
        return "Player";
      } else if (player === "scissors" && computer === "paper") {
        playerScore++;
        return "Player";
      } else {
        computerScore++;
        return "Computer";
      }
    };

    const roundWinner = playRound(playerSelection, computerSelection);
    console.log(`Round ${i + 1}: ${roundWinner}`);
  }
  console.log(
    `Final Score - Player: ${playerScore}, Computer: ${computerScore}`
  );
};

startGame();
