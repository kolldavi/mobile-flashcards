import {
  RECEIVE_DECKS,
  ADD_DECK,
  EDIT_DECK,
  REMOVE_DECK
} from '../actions/Deck';

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    default:
      return state;
  }
}

export default decks;
