/**
 * Calculate and return the value of the card
 * @param { String } letter 
 * @returns { Number }
 */
export const valueLetter = (letter) => {
  const value = letter.substring(0, letter.length - 1);

  return (isNaN(value))
    ? (value === 'A') ? 11 : 10
    : parseInt(value);
}