import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { addDeck } from '../actions/Deck';
import { connect } from 'react-redux';
import { styles } from '../utils/styles';
class AddDeck extends React.Component {
  state = {
    input: ''
  };
  render() {
    const { addDeck } = this.props;
    const { input } = this.state;
    {
      return (
        <View style={styles.container}>
          <TextInput
            placeholder="Deck Name"
            value={input}
            onChangeText={input => {
              this.setState({ input });
            }}
          />

          <TouchableOpacity
            onPress={() => {
              const inputTrim = input.trim();
              addDeck({ title: inputTrim });
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Deck</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

function mapStateToProps(decks) {
  return {
    deckTitles: Object.keys(decks).reduce((result, id) => {
      result.push(decks[id].title);
      return result;
    }, [])
  };
}

export default connect(mapStateToProps, { addDeck })(AddDeck);
