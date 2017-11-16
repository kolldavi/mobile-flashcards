import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SingleDeck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });
  render() {
    const { title, questions } = this.props.navigation.state.params;
    console.log('question', questions);
    {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>{title}</Text>
          <Text>number of questions: {questions.length}</Text>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Quiz', {
                cards: questions
              })}>
            <Text>take quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('AddCard', {
                title: title
              })}>
            <Text>Add Card</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

export default SingleDeck;
