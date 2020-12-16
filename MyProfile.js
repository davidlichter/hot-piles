import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Deck from './deckOfCards.js';

const MyProfile = (props, { navigation }) => {
  var user = props.route.params
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{user.username}'s Profile</Text>
      <Text style={styles.textStyle}>Stats</Text>
      <Text style={styles.textStyle}>Games Played: {user.gamesPlayed}</Text>
      <Text style={styles.textStyle}>Wins: {user.wins}</Text>
      <Text style={styles.textStyle}>Win Percentage: {(user.wins / user.gamesPlayed * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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