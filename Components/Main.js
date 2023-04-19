import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';

const Row = () => (
  <View style={styles.Row}>
    <Square />
    <Square />
    <View style={styles.guessSquare} />
    <View style={styles.guessSquare} />
    <View style={styles.guessSquare} />
    <View style={styles.guessSquare} />
    <View style={styles.guessSquare} />
  </View>
);

const Square = () => {
  <View style={styles.guessSquare} />;
};

export default function App() {
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
