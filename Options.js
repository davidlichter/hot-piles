import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Deck from './deckOfCards.js';

const Options = ({ navigation }) => {
  return (
    <Button
      title='Options'
    />
  );
};

export default Options;