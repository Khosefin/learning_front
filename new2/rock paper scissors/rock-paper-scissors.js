let score = JSON.parse(localStorage.getItem("Score")) || {
    wins: 0,
    Ties: 0,
    losses: 0,
  };

  gameScore();

  let result = "";

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = "";

    if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You win.";
      } else if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "Scissors") {
        result = "You lose.";
      }
    } else if (playerMove === "Rock") {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "You lose.";
      } else if (computerMove === "Scissors") {
        result = "You win.";
      }
    } else if (playerMove === "Scissors") {
      if (computerMove === "rock") {
        result = "You lose.";
      } else if (computerMove === "paper") {
        result = "You win.";
      } else if (computerMove === "Scissors") {
        result = "Tie.";
      }
    }

    if (result === "You win.") {
      score.wins += 1;
    } else if (result === "Tie.") {
      score.Ties += 1;
    } else if (result === "You lose.") {
      score.losses += 1;
    }

    document.querySelector(".resulth").innerHTML = `${result}`;

    document.querySelector(
      ".move"
    ).innerHTML = `You <img class="imgs" src="/img/${playerMove}-emoji.png" /> <img class="imgs" src="/img/${computerMove}-emoji.png" /> Computer`;

    localStorage.setItem("Score", JSON.stringify(score));

    gameScore();
  }
  function gameScore() {
    document.querySelector(
      ".scoreh"
    ).innerHTML = `wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.Ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "Scissors";
    }
    console.log(computerMove);

    return computerMove;
  }