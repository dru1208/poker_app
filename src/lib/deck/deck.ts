import _ from "underscore"
import Card from "../card"
import CardValue from "../card/cardValue"
import Suit from "../card/suit"

class Deck {
  cards: Card[]

  constructor(cards) {
    this.cards = cards
  }

  size(): number {
    return this.cards.length
  }

  deal(): Card {
    const cards = [...this.cards]
    const dealtCard = cards.shift()
    this.cards = cards
    return dealtCard
  }

  static create(): Deck {
    const cards = Deck.generateCards()
    return new Deck(cards)
  }

  static createShuffled(fn: (cards: any[]) => any[] = _.shuffle): Deck {
    const cards = Deck.generateCards()
    const shuffled = fn(cards)
    return new Deck(shuffled)
  }

  private static generateCards(): Card[] {
    const suits = [Suit.Club, Suit.Diamond, Suit.Heart, Suit.Spade]
    const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    return suits.reduce((acc, suit) => {
      const suitedCards = cardValues.map(v => Card.create(suit, v))
      return [...acc, ...suitedCards]
    }, [])
  }
}

export default Deck