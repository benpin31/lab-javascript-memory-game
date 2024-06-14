import { MemoryGame } from './memory.js'

const cards = [
	{ name: 'aquaman', img: 'aquaman.jpg' },
	{ name: 'batman', img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four', img: 'fantastic-four.jpg' },
	{ name: 'flash', img: 'flash.jpg' },
	{ name: 'green arrow', img: 'green-arrow.jpg' },
	{ name: 'green lantern', img: 'green-lantern.jpg' },
	{ name: 'ironman', img: 'ironman.jpg' },
	{ name: 'spiderman', img: 'spiderman.jpg' },
	{ name: 'superman', img: 'superman.jpg' },
	{ name: 'the avengers', img: 'the-avengers.jpg' },
	{ name: 'thor', img: 'thor.jpg' },
	{ name: 'aquaman', img: 'aquaman.jpg' },
	{ name: 'batman', img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four', img: 'fantastic-four.jpg' },
	{ name: 'flash', img: 'flash.jpg' },
	{ name: 'green arrow', img: 'green-arrow.jpg' },
	{ name: 'green lantern', img: 'green-lantern.jpg' },
	{ name: 'ironman', img: 'ironman.jpg' },
	{ name: 'spiderman', img: 'spiderman.jpg' },
	{ name: 'superman', img: 'superman.jpg' },
	{ name: 'the avengers', img: 'the-avengers.jpg' },
	{ name: 'thor', img: 'thor.jpg' },
]

const memoryGame = new MemoryGame(cards)

window.addEventListener('load', (event) => {
	let html = ''
	memoryGame.cards.forEach((pic) => {
		html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(../img/${pic.img}) no-repeat"></div>
      </div>
    `
	})

	// Add all the divs to the HTML
	document.querySelector('#memory-board').innerHTML = html

	const spanPairClicked = document.querySelector('#pairs-clicked')
	const spanPairGuessed = document.querySelector('#pairs-guessed')

	// Bind the click event of each element to a function
	document.querySelectorAll('.card').forEach((card) => {
		card.addEventListener('click', () => {
			memoryGame.addPickedCards(card)
			card.classList.toggle('turned')

			if (memoryGame.getPickedCardsNumber() === 2) {
				const isGuessed = memoryGame.checkIfPair()
				spanPairClicked.innerText = parseInt(spanPairClicked.innerText) + 1
				memoryGame.incPairsClicked()

				const newClassCard = isGuessed ? 'blocked' : 'turned'

				if (isGuessed) {
					memoryGame.incPairGuessed()
					spanPairGuessed.innerText = parseInt(spanPairGuessed.innerText) + 1
				}

				setTimeout(() => {
					memoryGame.pickedCards[0].classList.toggle(newClassCard)
					memoryGame.pickedCards[1].classList.toggle(newClassCard)
					memoryGame.emptyPickedCard()
				}, 500)


			}
		})
	})
})
