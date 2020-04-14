import _ from "underscore"
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

  describe("create shuffled", () => {
    it("should create a deck with 52 cards", () => {
      const mockShuffle = jest.fn((cards: any[]) => cards.reverse())
      const shuffledDeck = Deck.createShuffled(mockShuffle)
      const totalCards = shuffledDeck.cards.length
      expect(totalCards).toEqual(52)

      const unshuffledDeck = Deck.create()
      const unshuffledFirst = unshuffledDeck.cards[0]
      const shuffledFinal = shuffledDeck.cards[totalCards - 1]
      expect(shuffledFinal.value()).toEqual(unshuffledFirst.value())
    })
  })
})