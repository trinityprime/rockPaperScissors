//  variables
let playerScore = 0;
let computerScore = 0;
let gameWinner = " ";

// randomise computer choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  const choice = choices[randomChoice];
  return choice;
};

const startGame = () => {
  //repeat game 5 times
  for (let i = 0; i < 5; i++) {
    const playerSelection = "rock".toLowerCase();
    const computerSelection = getComputerChoice();

    // logic
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

    // keeps track of each game won by who
    const roundWinner = playRound(playerSelection, computerSelection);
    console.log(`Round ${i + 1}: ${roundWinner}`);
  }

  //logs final winner + points
  if (playerScore > computerScore) {
    gameWinner = "Player";
  } else {
    gameWinner = "Computer";
  }

  console.log(
    `Final Score - Player: ${playerScore}, Computer: ${computerScore}`
  );
  console.log(`${gameWinner} wins!`);
};

startGame();
