import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Deck from './deckOfCards.js';

class GameOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDeck: [],
      gameView: false,
      piles: []
    };
  }

  componentDidMount () {
    var deck = new Deck;
    deck.build();
    deck.shuffle();
    this.setState({
      currentDeck: deck.deckOfCards
    })
  }

  dealCards () {
    var firstNine = this.state.currentDeck.slice(0, 9)
    var piles = []
    for (var i = 0; i < firstNine.length; i++) {
      piles.push(firstNine[i])
    }
    this.setState({
      piles: piles,
      currentDeck: this.state.currentDeck.slice(9)
    })
  }

  render () {
    return (
      <div>
        {!this.state.gameView ?
          <Button onPress={() => {
            this.dealCards();
            this.setState({
              gameView: true
            })
          }} title='Start'></Button> :
          <div>
            <Text>{this.state.piles[0].value}{this.state.piles[0].suit}</Text>
            <Text>{this.state.piles[1].value}{this.state.piles[1].suit}</Text>
            <Text>{this.state.piles[2].value}{this.state.piles[2].suit}</Text>
            <Text>{this.state.piles[3].value}{this.state.piles[3].suit}</Text>
            <Text>{this.state.piles[4].value}{this.state.piles[4].suit}</Text>
            <Text>{this.state.piles[5].value}{this.state.piles[5].suit}</Text>
            <Text>{this.state.piles[6].value}{this.state.piles[6].suit}</Text>
            <Text>{this.state.piles[7].value}{this.state.piles[7].suit}</Text>
            <Text>{this.state.piles[8].value}{this.state.piles[8].suit}</Text>
          </div>
        }
      </div>
    );
  }
};

export default GameOverview;