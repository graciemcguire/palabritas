import React, {useState, setState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Square from './Square';
import styles from './styles';
import { pickAnswer } from '../utils/dictionary';

export default function Main() {
  const [currentRow, setCurrentRow] = useState(0);
  const [guess, setGuess] = useState('');
  const [guessResult, setGuessResult] = useState({});

  const checkGuess = () => {
    let guessResult = {};
    let answer = pickAnswer()
    let word = answer.word.split('');
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
    setGuessResult(guessResult);
    setCurrentRow(currentRow + 1);
    console.log({answer, word})
    setGuess('')
    // each word is coming in as a string, we need to check each letter against eachother
    // check if each letter is in the word at all / in the correct position
  };

  const CompleteRow = () => {
    return (
      <View style={styles.Row}>
        <View style={styles.guessSquare} >
          <Text>f</Text>
        </View>
        <View style={styles.guessSquare} >
          <Text>u</Text>
        </View>
        <View style={styles.guessSquare} >
          <Text>e</Text>
        </View>
        <View style={styles.guessSquare} >
          <Text>g</Text>
        </View>
        <View style={styles.guessSquareYellow} >
          <Text>o</Text>
        </View>
      </View>
    )
  }

  const EmptyRow = () => {
    return (
      <View style={styles.Row}>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </View>
    )
  }

  const InputRow = () => {

    return (
      <SmoothPinCodeInput
        ref={this.pinInput}
        value={guess}
        onTextChange={code => setGuess(code)}
        onFulfill={checkGuess}
        onBackspace={this._focusePrevInput}
        codeLength={5}
      />
    );
  };

  console.log({currentRow: currentRow})
  return (
    <SafeAreaView style={styles.main}>
      <View>
        {[0,1,2,3,4,5].map((value) => {
          if (currentRow > value) {
            return (<CompleteRow key={value} />)
          } else if (currentRow == value) {
            return (<InputRow key={value} />)
          } else {
            return (<EmptyRow key={value}/>)
          }
        })}
      </View>
    </SafeAreaView>
  );
}
