import _ from 'underscore';

/**
 * This function create a new deck
 * @param { Array<String> } types Ex: ['C', 'D', 'H', 'S']
 * @param { Array<String> } specials Ex: ['A', 'J', 'Q', 'K']
 * @returns { Array<String> }
 */
export const createDeck = (types, specials) => {
  if (!types || types.length === 0)
    throw new Error('types is required and must be an array of strings');

  if (!specials || specials.length === 0)
    throw new Error('specials is required and must be an array of strings');

  let deck = [];

  for(let i = 2; i <= 10; i++) {
    for(let type of types) {
      deck.push(i + type);
    }
  }

  for(let type of types) {
    for(let special of specials) {
      deck.push(special + type);
    }
  }

  return _.shuffle(deck);
}
