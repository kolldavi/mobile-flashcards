import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../utils/styles';
import { getDeck } from '../utils/api';
import { connect } from 'react-redux';
import { removeDeck } from '../utils/api';
import { deleteDeck } from '../actions/Deck';
class SingleDeck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    const { deck, deleteDeck } = this.props;
    if (deck) {
      return (
        <View style={{ flex: 1 }}>
          <Text style={styles.singleDeckTitle}>{deck.title}</Text>
          <Text style={styles.singleDeckCardInfo}>
            number of questions: {deck.questions.length}
          </Text>
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
          <TouchableOpacity
            style={styles.container}
            onPress={async () => {
              const title = deck.title;
              try {
                await removeDeck(title).then(deleteDeck(title));
                Alert.alert(`Deleted\n Deck ${deck.title}`, null, [
                  { text: 'OK' }
                ]);
                this.props.navigation.navigate('Home', {
                  title: deck.title
                });
              } catch (error) {
                console.log(error);
              }
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Delete Deck</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <Text>hello</Text>
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
export default connect(mapStateToProps, { deleteDeck })(SingleDeck);
