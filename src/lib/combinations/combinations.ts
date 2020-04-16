import { Card } from "../card"
import CombinationType from "./combinationType"
import CombinationWeight from "./combinationWeight"

class Combination {
  cards: Card[]

  constructor(cards) {
    this.cards = cards
  }

  comboType(): CombinationType
}