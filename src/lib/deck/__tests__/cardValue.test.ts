import CardValue from "../cardValue"

describe("CardValue", () => {
  describe("create", () => {
    it("should create a valid card value if the weight is valid", () => {
      const cardValue = CardValue.create(2)
      expect(cardValue.isValid()).toBe(true)

      const cardValueFloat = CardValue.create(2.3)
      expect(cardValueFloat.isValid()).toBe(false)

      const cardValueInvalid = CardValue.create(200)
      expect(cardValueInvalid.isValid()).toBe(false)
    })
  })

  describe("value", () => {
    it("should have a value that matches the initial weight of the card value", () => {
      const cardValue = CardValue.create(2)
      expect(cardValue.value()).toEqual(2)
    })
  })

  describe("for display", () => {
    it("should convert the weight to the correct display for A", () => {
      const cardValue = CardValue.create(14)
      expect(cardValue.forDisplay()).toEqual("A")
    })

    it("should convert the weight to the correct display for K", () => {
      const cardValue = CardValue.create(14)
      expect(cardValue.forDisplay()).toEqual("A")
    })

    it("should convert the weight to the correct display for Q", () => {
      const cardValue = CardValue.create(14)
      expect(cardValue.forDisplay()).toEqual("A")
    })

    it("should convert the weight to the correct display for J", () => {
      const cardValue = CardValue.create(14)
      expect(cardValue.forDisplay()).toEqual("A")
    })

    it("should convert the weight to the correct display for the other numbers", () => {
      const cardValueTen = CardValue.create(10)
      expect(cardValueTen.forDisplay()).toEqual("10")

      const cardValueFive = CardValue.create(5)
      expect(cardValueFive.forDisplay()).toEqual("5")

      const cardValueTwo = CardValue.create(2)
      expect(cardValueTwo.forDisplay()).toEqual("2")
    })
  })
})