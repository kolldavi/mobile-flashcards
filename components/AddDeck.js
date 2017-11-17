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

export default connect(null, { addDeck })(AddDeck);
