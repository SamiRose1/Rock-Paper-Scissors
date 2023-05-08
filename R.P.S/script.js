"use strict";
const winsResult = document.getElementById("wins");
let counterWin = winsResult.innerHTML;
counterWin = 0;
const drawsResult = document.getElementById("draws");
let drawsCounter = drawsResult.innerHTML;
const lossesResult = document.getElementById("losses");
let lossesCounter = lossesResult.innerHTML;
const resetBtn = document.querySelector(".resetBtn");

function rpsGame(yourChoice) {
  let humanChoice = yourChoice.id;
  let botChoice = numberToChoice(botRandom());
  let results = decideWinner(humanChoice, botChoice);
  let message = finalMessage(results);
  console.log(message);
  let FrontEnd = rpsFrontEnd(humanChoice, botChoice, finalMessage);
  if (results === results[(1, 0)]) {
    counterWin++;
    console.log("you Wonnn");
  } else if (humanChoice < botChoice) {
    console.log("You lost");
    lossesCounter--;
  } else {
    console.log("draws");
    drawsCounter;
  }
  console.log(
    " humanChoice: ",
    humanChoice,
    " botChoice :",
    botChoice,
    "results: ",
    results,
    "message:",
    message
  );
}

function botRandom() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

//rps game database
function decideWinner(yourChoice, computerChoice) {
  let rpsDataBase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  let yourScore = rpsDataBase[yourChoice][computerChoice];
  let computerScore = rpsDataBase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You drew!", color: "yellow" };
  } else if (yourScore === 1) {
    return { message: "You won", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  let imagesDataBase = {
    rock: document.getElementById("rock").id,
    paper: document.getElementById("paper").id,
    scissors: document.getElementById("scissors").id,
  };

  //lets remove the images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let humanDiv = document.createElement("div");
  humanDiv.setAttribute("img", humanImageChoice);
  humanDiv.innerHTML = `<img src=images/${imagesDataBase[humanImageChoice]}.jpg >`;
  let botDiv = document.createElement("div");
  botDiv.setAttribute("img", botImageChoice);
  botDiv.innerHTML = `<img src=images/${imagesDataBase[botImageChoice]}.jpg >`;
  let messageDiv = document.createElement("div");
  // messageDiv.setAttribute("p", message);
  // document.querySelector("#images").appendChild(messageDiv);

  document.querySelector("#humanImage").appendChild(humanDiv);
  document.querySelector("#botImage").appendChild(botDiv);
}

function resetFunction() {
  document.getElementById("botImage").remove();
  document.getElementById("humanImage").remove();
}

resetBtn.addEventListener("click", resetFunction);
