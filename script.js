"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.getElementsByClassName("dice")[0];
const btnNew = document.getElementsByClassName("btn--new")[0];
const btnHold = document.getElementsByClassName("btn--hold")[0];
const btnRoll = document.getElementsByClassName("btn--roll")[0];
const player0 = document.getElementsByClassName("player--0")[0];
const player1 = document.getElementsByClassName("player--1")[0];
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
let curscore = 0;
let player0Score = 0;
let player1Score = 0;

//starting condition
score0El.innerHTML = 0;
score1El.innerHTML = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", onRoll);
btnHold.addEventListener("click", onHold);
btnNew.addEventListener("click", onNew);

function onRoll() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");

  diceEl.src = `dice-${dice}.png`;

  if (dice != 1) {
    curscore += dice;

    if (player0.classList.contains("player--active")) {
      current0.textContent = curscore;
    } else {
      current1.textContent = curscore;
    }
  } else {
    curscore = 0;
    if (player0.classList.contains("player--active")) {
      player1.classList.add("player--active");
      player0.classList.remove("player--active");
      current0.textContent = 0;
    } else {
      player0.classList.add("player--active");
      player1.classList.remove("player--active");
      current1.textContent = 0;
    }
  }
}

function onHold() {
  if (player0.classList.contains("player--active")) {
    player0Score += curscore;
    curscore = 0;
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
    score0El.textContent = player0Score;
    current0.textContent = 0;
  } else {
    player1Score += curscore;
    curscore = 0;
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
    score1El.textContent = player1Score;
    current1.textContent = 0;
  }
}

function onNew() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceEl.classList.add("hidden");
  player0Score = 0;
  player1Score = 0;
  curscore = 0;
  player1.classList.remove("player--active");
  player0.classList.add("player--active");
}
