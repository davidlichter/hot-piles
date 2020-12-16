import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image } from 'react-native';
import Deck from './deckOfCards.js';

const IndividualCard = ({ card, nav, selectCard }) => {
  return (
    <View>
      <Button title={card.name} onPress={() => {
        selectCard(card)
      }}></Button>
      <Image style={{width: 51, height: 21, resizeMode: 'contain', alignItems: 'center', justifyContent:'center'}}/>
    </View>
  )
};

export default IndividualCard;

const styles = StyleSheet.create({
  Diamonds: {
    backgroundColor: 'red',
  },
  Hearts: {
    backgroundColor: 'red',
  },
  Spades: {
    backgroundColor: 'black',
    color: 'white'
  },
  Clubs: {
    backgroundColor: 'black',
    color: 'white'
  }
});