import Suit from "./suit"
import CardValue from "./cardValue"

class Card {
  suit: Suit;
  cardValue: CardValue

  constructor(suit: Suit, cardValue: CardValue) {
    this.suit = suit
    this.cardValue = cardValue
  }

  value(): number {
    return this.cardValue.weight
  }

  isValid(): boolean {
    return this.cardValue.isValid()
  }

  static create(suit: Suit, weight: number) {
    const cardValue = CardValue.create(weight)
    return new Card(suit, cardValue)
  }
}

export default Card