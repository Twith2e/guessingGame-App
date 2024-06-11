btnValue = "";
score = 0;
function crossCheck(button) {
  btnValue = Number(button.value);
  myGuess = document.getElementById("myguess");
  myGuess.innerText = btnValue;
}

function makeGuess() {
  myScore = document.getElementById("score");
  myScreen = document.getElementById("random-number-screen");
  myGuess = document.getElementById("myguess");
  randomNumberBetweenZeroAndEleven = Math.ceil(Math.random() * 10);
  if (randomNumberBetweenZeroAndEleven === btnValue) {
    myScreen.innerText = `You guessed ${btnValue}, you are right🎉🎉!`;
    score++;
    myScore.innerText = score;
  } else {
    myScreen.innerText = `You are wrong💔💔! The random number is ${randomNumberBetweenZeroAndEleven}`;
  }
  myGuess.innerText = "";
}

function reset(button) {
  myScore = document.getElementById("score");
  resetBtnValue = button.value;
  if (resetBtnValue === "reset") {
    score = 0;
    myScore.innerText = score;
  }
}
