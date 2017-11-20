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
      return action.decks;
    }
    case ADD_DECK: {
      const { title } = action;
      submitEntry({
        key: title,
        entry: {
          title: title,
          questions: []
        }
      });
      return {
        ...state,
        [title]: {
          title: title,
          questions: []
        }
      };
    }
    case ADD_CARD: {
      const { title, answer, question } = action;
      submitEntry({
        key: title,
        entry: {
          title: title,
          questions: [
            { question: question, answer: answer },
            ...state[title].questions
          ]
        }
      });
      return {
        ...state,
        [title]: {
          title: title,
          questions: [
            { question: question, answer: answer },
            ...state[title].questions
          ]
        }
      };
    }
    case REMOVE_DECK: {
      return Object.keys(state)
        .filter(key => key !== action.title)
        .reduce((result, current) => {
          result[current] = state[current];
          return result;
        }, {});
    }
    default:
      return state;
  }
}

export default decks;
