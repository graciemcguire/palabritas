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
    // backgroundColor: 'red'
  },
});
