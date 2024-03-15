import { valueLetter } from "./value-letter";

/**
 * fisrt player and the last will be the computer
 * @param { String } letter 
 * @param { Number } shift
 * @param { Array<Number> } playerPoints
 * @param { Array<Number> } scores
 * @returns { Number }
 */
export const accumulatePoints = (letter, shift, playerPoints, scores) => {
  playerPoints[shift] = playerPoints[shift] + valueLetter(letter);
  scores[shift].innerText = playerPoints[shift];
  return playerPoints[shift];
}