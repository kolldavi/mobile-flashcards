import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { addCard } from '../actions/Deck';
import { connect } from 'react-redux';
import { styles } from '../utils/styles';

class AddCard extends React.Component {
  state = {
    answer: '',
    question: ''
  };
  render() {
    const { addCard } = this.props;
    const { title } = this.props.navigation.state.params;
    const { answer, question } = this.state;
    {
      return (
        <View style={{ justifyContent: 'center' }}>
          <TextInput
            style={styles.input}
            multiline={true}
            placeholder="Question"
            value={question}
            onChangeText={question => {
              this.setState({ question });
            }}
          />
          <TextInput
            style={styles.input}
            multiline={true}
            placeholder="Answer"
            value={answer}
            onChangeText={answer => {
              this.setState({ answer });
            }}
          />
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              console.log('press');
              if (this.state.question === '' || this.state.answer === '') {
                Alert.alert(
                  'You have to enter data in both fields',
                  null,
                  [{ text: 'OK' }],
                  {
                    cancelable: false
                  }
                );
                return;
              } else {
                addCard({
                  title: title,
                  question: question.trim(),
                  answer: answer.trim()
                });
              }
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Card</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

export default connect(null, { addCard })(AddCard);
