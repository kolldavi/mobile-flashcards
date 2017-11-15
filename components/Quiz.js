import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Quiz extends React.Component {
  render() {
    const { title } = this.props.navigation.state.params;
    {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text>Go Back</Text>
          </TouchableOpacity>
          <Text>Quiz for {title}</Text>
        </View>
      );
    }
  }
}

export default Quiz;
