import _ from "underscore"
import { Deck } from "../index"
import { Suit } from "../../card"

describe("Deck", () => {
  describe("size", () => {
    it("should return the number of cards in the deck", () => {
      const deck = Deck.create()
      expect(deck.size()).toEqual(52)
    })
  })

  describe("deal", () => {
    it("should remove and return the top card in the deck", () => {
      const deck = Deck.create()
      expect(deck.size()).toEqual(52)
      const topCard = deck.cards[0]

      const dealtCard = deck.deal()
      expect(deck.size()).toEqual(51)
      expect(topCard).toEqual(dealtCard)
    })
  })

  describe("create", () => {
    it("should create a deck with 52 cards", () => {
      const deck = Deck.create()
      expect(deck.size()).toEqual(52)
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
      const totalCards = shuffledDeck.size()
      expect(totalCards).toEqual(52)
    })

    it("should apply the shuffle method", () => {
      const mockShuffle = jest.fn((cards: any[]) => cards.reverse())

      const shuffledDeck = Deck.createShuffled(mockShuffle)
      const unshuffledDeck = Deck.create()

      const totalCards = shuffledDeck.size()

      const unshuffledFirst = unshuffledDeck.cards[0]
      const shuffledFinal = shuffledDeck.cards[totalCards - 1]

      expect(shuffledFinal.value()).toEqual(unshuffledFirst.value())
    })
  })
})