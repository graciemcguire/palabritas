import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  guessSquare: {
    borderColor: 'grey',
    borderWidth: 2,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  guessSquareYellow: {
    borderColor: 'grey',
    borderWidth: 2,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'yellow',
  },
  main: {
    marginTop: 75,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  defaultKey: {
    justifyContent: 'center',
    backgroundColor: '#d3d6da',
    padding: 8,
    margin: 3,
    border: 0,
    marginLeft: 6,
    height: 50,
    borderRadius: 4,
  },
  especialKey: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d6da',
    padding: 8,
    margin: 3,
    border: 0,
    marginLeft: 6,
    height: 52,
    width: 60,
    borderRadius: 4,
  },

  keyboard: {
    flexDirection: 'column',
    marginBottom: 30,
  },

  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
