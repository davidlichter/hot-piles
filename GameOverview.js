import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Deck from './deckOfCards.js';
import IndividualCard from './IndividualCard.js';

class GameOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDeck: [],
      gameView: false,
      piles: [],
      selected: false,
      cardSelected: null
    };
    this.selectCard = this.selectCard.bind(this);
    this.unselectCard = this.unselectCard.bind(this);
    this.selectHigher = this.selectHigher.bind(this);
    this.selectLower = this.selectLower.bind(this);
  }

  componentDidMount() {
    var deck = new Deck;
    deck.build();
    deck.shuffle();
    this.setState({
      currentDeck: deck.deckOfCards
    })
  };

  unselectCard() {
    this.setState({
      selected: false,
      cardSelected: null
    })
  };

  selectCard(card) {
    this.setState({
      selected: true,
      cardSelected: card
    })
  };

  selectHigher(card) {
    var deck = this.state.currentDeck.slice(1)
    var flippedCard = this.state.currentDeck[0]
    var piles = this.state.piles.slice()
    if (card.value < flippedCard.value) {
      flippedCard.index = card.index;
      piles.splice(card.index, 1, flippedCard)
      alert(`Correct! The ${flippedCard.name} is higher than the ${card.name}`);
    } else {
      piles.splice(card.index, 1)
      alert(`Sorry! The ${flippedCard.name} is lower than the ${card.name}`);
    }
    this.setState({
      currentDeck: deck,
      piles: piles,
      selected: false,
      cardSelected: null
    })
  }

  selectLower(card) {
    var deck = this.state.currentDeck.slice(1)
    var flippedCard = this.state.currentDeck[0]
    var piles = this.state.piles.slice()
    if (card.value > flippedCard.value) {
      flippedCard.index = card.index;
      piles.splice(card.index, 1, flippedCard)
      alert(`Correct! The ${flippedCard.name} is lower than the ${card.name}`);
    } else {
      piles.splice(card.index, 1)
      alert(`Sorry! The ${flippedCard.name} is higher than the ${card.name}`);
    }
    this.setState({
      currentDeck: deck,
      piles: piles,
      selected: false,
      cardSelected: null
    })
  }



  dealCards() {
    var firstNine = this.state.currentDeck.slice(0, 9)
    var piles = []
    for (var i = 0; i < firstNine.length; i++) {
      firstNine[i].index = [i]
      piles.push(firstNine[i])
    }
    this.setState({
      piles: piles,
      currentDeck: this.state.currentDeck.slice(9)
    })
  };

  render () {
    return (
      <View>
        {!this.state.selected ?
          <View>
            {!this.state.gameView ?
              <Button onPress={() => {
                this.dealCards();
                this.setState({
                  gameView: true
                })
              }} title='Start'></Button> :
              <View>
                {this.state.piles.map((individualCard) => {
                  return <IndividualCard nav={this.props.navigation} selectCard={this.selectCard} key={individualCard.value + individualCard.suit} card={individualCard}></IndividualCard>
                })}
              </View>
            }
          </View> :
          <View>
            <Button onPress={() => {
              this.unselectCard();
            }} title='See all cards'></Button>
            <Button title={this.state.cardSelected.name}></Button>
            <Button onPress={() => {
              this.selectHigher(this.state.cardSelected);
            }}
            title='Higher'></Button>
            <Button onPress={() => {
              this.selectLower(this.state.cardSelected);
            }}
              title='Lower'></Button>
          </View>
        }
      </View>
    );
  }
};

export default GameOverview;