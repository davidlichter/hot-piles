import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Deck from './deckOfCards.js';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 60, textAlign: 'center'}}>Welcome to Hot Piles</Text>
      <Button style={styles.buttonContainer}
        title='Start A New Game'
        onPress={() => navigation.navigate('New Game')}
      />
      <Button style={styles.buttonContainer}
        title='Options'
        onPress={() => navigation.navigate('Options')}
      />
      <Button style={styles.buttonContainer}
        title='My Profile'
        onPress={() => navigation.navigate('Login')}
      />
      <Button style={styles.buttonContainer} title='Rules' onPress={() => navigation.navigate('Rules')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 300,
    height: 100
  }
});

export default Home;