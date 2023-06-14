import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const KeyboardRow = ({letters, onKeyPress, keyStyle}) => (
  <View style={styles.keyboardRow}>
    {letters.map(letter => (
      <TouchableOpacity onPress={() => onKeyPress(letter)} key={letter}>
        <View style={keyStyle}>
          <Text>{letter}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

export default function Keyboard() {
  const row_uno = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row_dos = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
  const row_tres = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const row_quatro = ['⌫', 'INTRO'];

  const onKeyPress = letter => {
    alert(`${letter}`);
  };

  return (
    <View style={styles.keyboard}>
      <KeyboardRow
        letters={row_uno}
        onKeyPress={onKeyPress}
        keyStyle={styles.defaultKey}
      />
      <KeyboardRow
        letters={row_dos}
        onKeyPress={onKeyPress}
        keyStyle={styles.defaultKey}
      />
      <KeyboardRow
        letters={row_tres}
        onKeyPress={onKeyPress}
        keyStyle={styles.defaultKey}
      />
      <KeyboardRow
        letters={row_quatro}
        onKeyPress={onKeyPress}
        keyStyle={styles.especialKey}
      />
    </View>
  );
}
