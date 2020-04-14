import Suit from "./suit"
import CardValue from "./cardValue"

class Card {
  suit: Suit;
  value: CardValue

  constructor(suit: Suit, value: CardValue) {
    this.suit = suit
    this.value = value
  }

  isValid(): boolean {
    return this.value.isValid()
  }

  static create(suit: Suit, weight: number) {
    const cardValue = CardValue.create(weight)
    return new Card(suit, cardValue)
  }
}

export default Card