/**
 * Return a card from the deck
 * @param { Array<String> } deck 
 * @returns { String }
 */
export const getLetter = (deck) => {
  if (!deck || deck.length === 0) {
    throw 'No hay cartas en la baraja';
  }

  return deck.pop();
}