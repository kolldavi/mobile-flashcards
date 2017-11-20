import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: 30
  },
  button: {
    alignItems: 'center',
    padding: 15,
    width: 110,
    backgroundColor: '#2196F3',
    borderRadius: 16,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  incorrectButton: {
    alignItems: 'center',
    padding: 15,
    width: 110,
    backgroundColor: '#FF0000',
    borderRadius: 16,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  buttonText: {
    color: 'white'
  },
  input: {
    height: 40,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  card: {
    padding: 100,
    borderWidth: 1,
    flex: 1,
    backgroundColor: 'white'
  },
  face: {
    marginTop: -65,
    marginLeft: -50,
    width: 250
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: -25,
    alignSelf: 'center'
  },
  cardScore: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 100,
    alignSelf: 'center'
  },
  singleDeckTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    alignSelf: 'center'
  },
  singleDeckCardInfo: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center'
  },
  line: {
    height: 1,
    width: 500,
    marginLeft: -50,
    backgroundColor: 'red',
    marginTop: 15
  },
  cardText: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 15
  }
});
