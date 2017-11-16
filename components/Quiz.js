import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { receiveDeck } from '../actions/Deck';
import { connect } from 'react-redux';
import { getDeck } from '../utils/api';
class Quiz extends React.Component {
  render() {
    const { cards } = this.props.navigation.state.params;
    //  console.log('props', cards);
    {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Quiz for </Text>
        </View>
      );
    }
  }
}

export default Quiz;
