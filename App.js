import React from 'react';
import { StyleSheet, Text, View, AppRegistry, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import SingleDeck from './components/SingleDeck';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const MyApp = StackNavigator(
  {
    Home: { screen: DeckList },
    Profile: { screen: SingleDeck },
    AddCard: { screen: AddCard },
    Quiz: { screen: Quiz }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar
            backgroundColor={'purple'}
            barStyle="light-content"
          />
          <MyApp />
        </View>
      </Provider>
    );
  }
}
