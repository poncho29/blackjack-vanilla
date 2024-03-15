/**
 * 
 * @param { String } letter 
 */
export const createLetter = (letter) => {
  if (!letter) {
    throw new Error('letter is required');
  }

  const imgLetter = document.createElement('img');
  imgLetter.src = `/assets/cartas/${letter}.png`;
  imgLetter.classList.add('letter');

  return imgLetter;
}