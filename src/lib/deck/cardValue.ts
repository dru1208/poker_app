class CardValue {
  weight: number
  valid: boolean

  constructor(weight: number, valid: boolean) {
    this.weight = weight
    this.valid = valid
  }

  isValid(): boolean {
    return this.valid
  }

  forDisplay(): string {
    switch (this.weight) {
      case 14:
        return "A"
      case 13:
        return "K"
      case 12:
        return "Q"
      case 11:
        return "J"
      case 0:
        return "Incorrectly Generated Value"
      default:
        return this.weight.toString()
    }
  }

  static create(weight: number): CardValue {
    if (Number.isInteger(weight) && weight >= 2 && weight <= 14) {
      return new CardValue(weight, true)
    } else {
      return new CardValue(0, false)
    }
  }
}

export default CardValue