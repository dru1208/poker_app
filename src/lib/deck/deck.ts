import Card from "./card"
import CardValue from "./card/cardValue"
import Suit from "./card/suit"

class Deck {
  cards: Card[]

  constructor(cards) {
    this.cards = cards
  }

  static create(): Deck {
    const suits = [Suit.Club, Suit.Diamond, Suit.Heart, Suit.Spade]
    const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    const cards = suits.reduce((acc, suit) => {
      const suitedCards = cardValues.map(v => Card.create(suit, v))
      return [...acc, ...suitedCards]
    }, [])
    return new Deck(cards)
  }
}

export default Deck