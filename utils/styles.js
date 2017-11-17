import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: 30
  },
  button: {
    alignItems: 'center',
    padding: 20,
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
    padding: 20,
    backgroundColor: '#FF0000',
    borderRadius: 16,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
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
  }
});
