import React from 'react';
import { StyleSheet, Text, View, AppRegistry, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import SingleDeck from './components/SingleDeck';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import Quiz from './components/Quiz';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

function CustomStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = TabNavigator(
  {
    Home: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'View Decks',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add New Deck',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    //animationEnabled: true,
    tabBarPosition: 'top',
    labelStyle: {
      fontSize: 12
    },
    tabBarOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

const MyApp = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  SingleDeck: { screen: SingleDeck },
  AddCard: { screen: AddCard },
  Quiz: { screen: Quiz }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar backgroundColor={'black'} barStyle="light-content" />
          <MyApp />
        </View>
      </Provider>
    );
  }
}
