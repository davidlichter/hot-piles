import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Deck from './deckOfCards.js';

const Rules = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The rules are simple.</Text>
      <Text style={styles.text}>Choose a pile.</Text>
      <Text style={styles.text}>Select whether you think the next card will be HIGHER or LOWER.</Text>
      <Text style={styles.text}>If you select wisely, the card will be added to the pile.</Text>
      <Text style={styles.text}>If you select poorly, we kill the pile.</Text>
      <Text style={styles.text}>Try to make it through the deck without killing all the piles.</Text>
      <Text style={styles.text}>Good Luck!</Text>
    </View>
  )
}

export default Rules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    marginHorizontal: 25,
    textAlign: 'center'
  }
});