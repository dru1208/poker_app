import Suit from "../suit"
import Card from "../index"
import CardValue from "../cardValue"

describe("Card", () => {
  it("should have a suit and a card value", () => {
    const suit = Suit.Diamond
    const value = CardValue.create(2)
    const card = new Card(suit, value)

    expect(card.suit).toEqual(Suit.Diamond)
    expect(card.value.weight).toEqual(2)
  })

  it("should be valid if the value is valid", () => {
    const suit = Suit.Diamond
    const value = CardValue.create(2)
    const card = new Card(suit, value)
    expect(card.isValid()).toBe(true)
  })

  it("should be invalid if the value is invalid", () => {
    const suit = Suit.Diamond
    const value = CardValue.create(200)
    const card = new Card(suit, value)
    expect(card.isValid()).toBe(false)
  })
})