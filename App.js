import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './deckOfCards.js';

export default App = () => {

  var deck = new Deck;
  deck.build();
  deck.shuffle();
  console.log(deck);
  return (
    <View style={styles.container}>
      <Text>Start a new game</Text>
      <Text>Options</Text>
      <Text>My Profile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
