import React, {useState, setState} from 'react';
import {View, SafeAreaView} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import styles from './styles';

const checkGuess = (guess, setGuessResult) => {
  let guessResult = {};
  let word = ['c', 'a', 'l', 'o', 'r'];
  let splitGuess = guess.split('');

  splitGuess.map((letter, key) => {
    // if a letter is correct status code 2
    if (word[key] === letter) {
      guessResult[letter] = 2;
    } else if (word[key] !== letter && word.includes(letter)) {
      // if a letter is not in correct spot, but does exist status code 1
      guessResult[letter] = 1;
    } else {
      guessResult[letter] = 0;
    }
  });
  setGuessResult({guessResult});
  // each word is coming in as a string, we need to check each letter against eachother
  // check if each letter is in the word at all / in the correct position
};

const Row = () => {
  const [guess, setGuess] = useState('');
  const [guessResult, setGuessResult] = useState({});

  return (
    <SmoothPinCodeInput
      ref={this.pinInput}
      value={guess}
      onTextChange={code => setGuess(code)}
      onFulfill={completeGuess => checkGuess(completeGuess, setGuessResult)}
      onBackspace={this._focusePrevInput}
      codeLength={5}
      cellStyle={{backgroundColor: 'yellow'}}
    />
  );
};

export default function Main() {
  // const [word, setWord] = useState('calor');
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </View>
    </SafeAreaView>
  );
}
