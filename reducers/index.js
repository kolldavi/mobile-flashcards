import {
  RECEIVE_DECKS,
  ADD_DECK,
  EDIT_DECK,
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
    case EDIT_DECK: {
      submitEntry({
        key: action.oldTitle,
        entry: { title: null }
      });
      submitEntry({
        key: action.newTitle,
        entry: {
          title: action.newTitle,
          questions: state[action.oldTitle].questions
        }
      });
      return {
        ...state,
        [action.oldTitle]: {
          title: null
        },
        [action.newTitle]: {
          title: action.newTitle,
          questions: state[action.oldTitle].questions
        }
      };
    }
    case REMOVE_DECK: {
      submitEntry({
        key: action.title,
        entry: { title: null }
      });
      return {
        ...state,
        [action.title]: {
          title: null
        }
      };
    }
    default:
      return state;
  }
}

export default decks;
