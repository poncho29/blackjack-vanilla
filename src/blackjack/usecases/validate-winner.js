/**
 * 
 * @param { Array<Number> } playerPoints 
 */
export const validateWinner = (playerPoints) => {
  const [minimumPoints, computerPoints] = playerPoints;

  setTimeout(() => {
    if (computerPoints === minimumPoints) {
      alert('Empate');
    } else if (minimumPoints > 21) {
      alert('La computadora gana');
    } else if (computerPoints > 21) {
      alert('¡Felicidades, ganaste!');
    } else  {
      alert('La computadora gana');
    }
  }, 100);
}