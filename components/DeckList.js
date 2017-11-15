import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import { getDecks } from '../utils/api';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions/Deck';

class DeckList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Decks'
  };
  componentDidMount() {
    getDecks().then(decks => this.props.receiveDecks(decks));
  }

  render() {
    const { decks } = this.props;
    console.log(this.props);
    return (
      <ScrollView style={{ flex: 2, backgroundColor: 'red' }}>
        {decks.map(item => {
          return (
            <View style={styles.item} key={item.title}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Profile', {
                    title: item.title,
                    questions: item.questions
                  })}>
                <Text>{item.title}</Text>
                <Text>Number of questions {item.questions.length}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: 'white',
    width: 350,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
});
function mapStateToProps(decks) {
  return {
    decks: Object.keys(decks).reduce((result, id) => {
      result.push(decks[id]);
      return result;
    }, [])
  };
}
export default connect(mapStateToProps, { receiveDecks })(DeckList);
