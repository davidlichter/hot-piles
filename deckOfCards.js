class Deck {
  constructor () {
    this.suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds']
    this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    this.names = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten','Jack', 'Queen', 'King', 'Ace'];
    this.deckOfCards = [];
  }

  build() {
    for (var i = 0; i < this.suits.length; i++) {
      for (var k = 0; k < this.values.length; k++) {
        var card = {
          suit: this.suits[i],
          value: this.values[k],
          name: `${this.names[k]} of ${this.suits[i]}`,
        }
        this.deckOfCards.push(card);
      }
    }
  }

  shuffle() {
    for (var i = this.deckOfCards.length - 1; i > 0; i--) {
      var newIndex = Math.floor(Math.random() * (i + 1));
      var temp = this.deckOfCards[i];
      this.deckOfCards[i] = this.deckOfCards[newIndex];
      this.deckOfCards[newIndex] = temp;
    }
  }
}

export default Deck;