import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Deck from './deckOfCards.js';

const MyProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Dave's Profile</Text>
      <Text style={styles.textStyle}>Stats</Text>
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
  },
  textStyle: {
    fontSize: 25
  }
});

export default MyProfile;