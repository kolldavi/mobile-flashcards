import { Notifications, Permissions } from 'expo';
import { AsyncStorage } from 'react-native';
export const STORAGE_KEY = 'flashcards:decks';

setDummyData = results => {
  const startData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  };

  if (results === null) {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(startData));
    return startData;
  } else {
    return JSON.parse(results);
  }
};
export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(setDummyData);
}

export function submitEntry({ key, entry }) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}

export function removeDeck(title) {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[title] = undefined;
    delete data[title];
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
}
