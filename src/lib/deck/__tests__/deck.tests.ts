import Deck from "../deck"
import Suit from "../card/suit"

describe("Deck", () => {
  describe("create", () => {
    it("should create a deck with 52 cards", () => {
      const deck = Deck.create()
      expect(deck.cards.length).toEqual(52)
    })

    it("should create a deck with 13 cards of each suit", () => {
      const deck = Deck.create()
      const cards = deck.cards
      expect(cards.filter(c => c.suit === Suit.Club).length).toEqual(13)
      expect(cards.filter(c => c.suit === Suit.Diamond).length).toEqual(13)
      expect(cards.filter(c => c.suit === Suit.Heart).length).toEqual(13)
      expect(cards.filter(c => c.suit === Suit.Spade).length).toEqual(13)
    })
  })
})