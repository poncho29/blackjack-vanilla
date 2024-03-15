import { accumulatePoints, createLetter, getLetter, validateWinner } from "./";

/**
 * @param
 * @param { Number } minimumPoints
 * @param { Array<Number> } playerPoints
 * @param { Array<Number> } scores
 * @param { Array<HTMLDivElement> } containerLetter
 */
export const computerShift = (deck, minimumPoints, playerPoints, scores, containerLetter) => {
  let computerPoints = 0;

  do {
    const letter = getLetter(deck);

    computerPoints = accumulatePoints(letter, playerPoints.length - 1, playerPoints, scores);

    const newLetter = createLetter(letter);
    containerLetter[1].append(newLetter);
  } while ((computerPoints < minimumPoints) && (computerPoints <= 21));

  validateWinner(playerPoints);
}