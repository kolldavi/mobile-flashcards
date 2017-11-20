import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { addDeck } from '../actions/Deck';
import { connect } from 'react-redux';
import { styles } from '../utils/styles';

class AddDeck extends React.Component {
  state = {
    input: ''
  };
  render() {
    const { addDeck, decks } = this.props;
    const { input } = this.state;
    {
      return (
        <View style={{ paddingTop: 50 }}>
          <TextInput
            style={styles.input}
            placeholder="Deck Name"
            value={input}
            onChangeText={input => {
              this.setState({ input });
            }}
          />

          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              if (input.trim() === '') {
                Alert.alert('The Title can not be blank', null, [
                  { text: 'OK' }
                ]);
              } else if (decks[input.trim()] === undefined) {
                addDeck({ title: input.trim() });
                Alert.alert('Deck Added', null, [{ text: 'OK' }]);
                this.props.navigation.navigate('SingleDeck', {
                  title: input.trim()
                });
              } else {
                Alert.alert('That name is already taken', null, [
                  { text: 'OK' }
                ]);
              }
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
  return { decks };
}

export default connect(mapStateToProps, { addDeck })(AddDeck);
