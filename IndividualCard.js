import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Deck from './deckOfCards.js';

const IndividualCard = ({ card, nav, selectCard }) => {
  return (
    <Button title={card.name} onPress={() => {
      selectCard(card)
    }}></Button>
  )
};



export default IndividualCard;