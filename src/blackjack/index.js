import _ from 'underscore';

import {
  accumulatePoints,
  computerShift,
  createDeck,
  createLetter,
  getLetter
} from './usecases';

/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazón)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'],
      specials = ['A', 'J', 'Q', 'K'];

let playerPoints = [];

const btnGet = document.querySelector('#btn-get'),
      btnStop = document.querySelector('#btn-stop'),
      btnNew = document.querySelector('#btn-new');

const containerLetters = document.querySelectorAll('.container-letters'),
      scores = document.querySelectorAll('small');

const startGame = (numberPlayer = 2) => {
  deck  = createDeck(types, specials);

  playerPoints = [];

  for (let i = 0; i < numberPlayer; i++) {
    playerPoints.push(0);
  }

  scores.forEach(score => score.innerText = 0);

  containerLetters.forEach(letter => letter.innerHTML = '');

  btnGet.disabled = false;
  btnStop.disabled = false;
}

// Events
btnGet.addEventListener('click', () => {
  const letter = getLetter(deck);

  const minimumPoints = accumulatePoints(letter, 0, playerPoints, scores);

  const newLetter = createLetter(letter);
  containerLetters[0].append(newLetter);

  if (minimumPoints > 21) {
    btnGet.disabled = true;
    btnStop.disabled = true;
    computerShift(deck, minimumPoints, playerPoints, scores, containerLetters);
  } else if (minimumPoints === 21) {
    btnGet.disabled = true;
    btnStop.disabled = true;
    computerShift(deck, minimumPoints, playerPoints, scores, containerLetters);
  }
});

btnStop.addEventListener('click', () => {
  btnGet.disabled = true;
  btnStop.disabled = true;
  computerShift(deck, playerPoints[0], playerPoints, scores, containerLetters);
});

btnNew.addEventListener('click', () => {
  startGame();
});