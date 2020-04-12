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
}

export default Card