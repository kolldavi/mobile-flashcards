import DeckList from '../components/DeckList';
import SingleDeck from '../components/SingleDeck';
import AddCard from '../components/AddCard';
import AddDeck from '../components/AddDeck';
import Quiz from '../components/Quiz';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
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
    animationEnabled: true,
    tabBarPosition: 'top',
    labelStyle: {
      fontSize: 12
    },
    tabBarOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

export const MyApp = StackNavigator({
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
