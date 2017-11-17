import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../utils/styles';
import { getDeck } from '../utils/api';
import { connect } from 'react-redux';
class SingleDeck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    const { deck } = this.props;
    console.log('deck', deck);
    {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>{deck.title}</Text>
          <Text>number of questions: {deck.questions.length}</Text>
          <TouchableOpacity
            style={styles.container}
            onPress={() =>
              this.props.navigation.navigate('Quiz', {
                cards: deck.questions
              })
            }>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Take Quiz</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={() =>
              this.props.navigation.navigate('AddCard', {
                title: deck.title
              })
            }>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Card</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

function mapStateToProps(decks, { navigation }) {
  const { title } = navigation.state.params;
  return {
    deck: decks[title]
  };
}
export default connect(mapStateToProps)(SingleDeck);
