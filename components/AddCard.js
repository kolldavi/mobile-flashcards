import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class AddCard extends React.Component {
  render() {
    const { title } = this.props.navigation.state.params;
    console.log(title);
    {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text>Go Back</Text>
          </TouchableOpacity>
          <Text>Add Card for {title} Deck</Text>
        </View>
      );
    }
  }
}

export default AddCard;
