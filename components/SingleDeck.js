import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SingleDeck extends React.Component {
  render() {
    const { title, questions } = this.props.navigation.state.params;
    {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text>Go Back</Text>
          </TouchableOpacity>
          <Text>{title}</Text>
          <Text>number of questions: {questions.length}</Text>
          <Text>{questions[questions.length - 1].question}</Text>
          <TouchableOpacity
            onPress={() => {
              console.log('take quiz');
            }}>
            <Text>take quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('pressed add');
            }}>
            <Text>Add Card</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

export default SingleDeck;
