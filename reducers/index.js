import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD,
  REMOVE_DECK
} from '../actions/Deck';

import { submitEntry } from '../utils/api';

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks
      };
    }
    case ADD_DECK: {
      submitEntry({
        key: action.title,
        entry: {
          title: action.title,
          questions: []
        }
      });
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      };
    }
    case ADD_CARD: {
      submitEntry({
        key: action.title,
        entry: {
          title: action.title,
          questions: [
            { question: action.question, answer: action.answer },
            ...state[action.title].questions
          ]
        }
      });
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [
            { question: action.question, answer: action.answer },
            ...state[action.title].questions
          ]
        }
      };
    }
    case REMOVE_DECK: {
      const newState = Object.keys(state)
        .filter(key => key !== action.title)
        .reduce((result, current) => {
          result[current] = state[current];
          return result;
        }, {});
      state = newState;
      return { ...state };
    }
    default:
      return state;
  }
}

export default decks;
