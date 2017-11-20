import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { receiveDeck } from '../actions/Deck';
import { connect } from 'react-redux';
import FlipCard from 'react-native-flip-card';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import { styles } from '../utils/styles';
class Quiz extends React.Component {
  state = {
    size: 0,
    currentQuestion: 0,
    numberCorrect: 0
  };
  componentDidMount() {
    this.setState({
      size: this.props.navigation.state.params.cards.length
    });
  }
  answerQuestion = answer => {
    if (answer === true) {
      this.setState(prevState => {
        return {
          numberCorrect: prevState.numberCorrect + 1,
          currentQuestion: prevState.currentQuestion + 1
        };
      });
    } else {
      this.setState(prevState => {
        return { currentQuestion: prevState.currentQuestion + 1 };
      });
    }
    if (this.state.currentQuestion + 1 === this.state.size) {
      clearLocalNotification().then(setLocalNotification);
    }
  };

  reset = () => {
    this.setState({
      currentQuestion: 0,
      numberCorrect: 0
    });
  };
  render() {
    const { cards } = this.props.navigation.state.params;
    const questionNumber = this.state.currentQuestion;
    const questionSize = this.state.size;

    if (questionNumber === questionSize) {
      return (
        <View>
          <Text style={styles.cardScore}>
            You got {this.state.numberCorrect} out of {questionNumber} correct
          </Text>
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              this.reset();
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Retake Quiz</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <FlipCard
            style={[styles.line, styles.card]}
            friction={8}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            on>
            <View style={styles.face}>
              <Text style={styles.cardTitle}>Question</Text>
              <Text style={styles.line} />
              <Text style={styles.cardText}>
                {cards[questionNumber].question}
              </Text>
            </View>
            <View style={styles.face}>
              <Text style={styles.cardTitle}>Answer</Text>
              <Text style={styles.cardText}>
                {cards[questionNumber].answer}
              </Text>
            </View>
          </FlipCard>
          <View>
            <Text>
              {questionNumber + 1} / {questionSize}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              this.answerQuestion(true);
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Correct</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              this.answerQuestion(false);
            }}>
            <View style={styles.incorrectButton}>
              <Text style={styles.buttonText}>InCorrect</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

export default Quiz;
