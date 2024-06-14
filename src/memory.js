export class MemoryGame {
	constructor(cards) {
		this.cards = cards
		this.pickedCards = []
		this.pairsClicked = 0
		this.pairsGuessed = 0
	}

	shuffleCards() {
		// ... write your code here
	}

	addPickedCards(card) {
		this.pickedCards.push(card)
	}

	getPickedCardsNumber() {
		return this.pickedCards.length
	}

	incPairsClicked() {
		this.pairsClicked++
	}

	incPairGuessed() {
		this.pairsGuessed
	}

	emptyPickedCard() {
		this.pickedCards = []
	}

	checkIfPair() {
		if (this.pickedCards.length !== 2) {
			throw new Error('Ne peux peux etre appelé que si 2 cartes ont été tirées')
		}

		return this.pickedCards[0].getAttribute('data-card-name')
			=== this.pickedCards[1].getAttribute('data-card-name')

	}

	checkIfFinished() {
		return this.cards.length === this.pairsGuessed * 2
	}
}
