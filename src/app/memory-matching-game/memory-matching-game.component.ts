import { Component, OnInit, OnDestroy } from '@angular/core';

interface Card {
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

@Component({
  selector: 'app-memory-matching-game',
  templateUrl: './memory-matching-game.component.html',
  styleUrls: ['./memory-matching-game.component.css']
})
export class MemoryMatchingGameComponent implements OnInit, OnDestroy {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  disableBoard = false;
  moves = 0; // Track the number of moves
  timer: any;
  timeElapsed = 0; // Track time in seconds
  gameWon = false; // Track game-winning state

  ngOnInit() {
    this.setupCards();
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  setupCards() {
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    this.cards = [...values, ...values]
      .map(value => ({ value, isFlipped: false, isMatched: false }))
      .sort(() => 0.5 - Math.random());
    this.moves = 0;
    this.timeElapsed = 0;
    this.gameWon = false;
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.timeElapsed++;
    }, 1000); // Increment every second
  }

  flipCard(card: Card) {
    if (this.disableBoard || card.isFlipped || card.isMatched || this.gameWon) {
      return;
    }

    card.isFlipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.moves++; // Increment move counter
      this.checkForMatch();
    }
  }

  checkForMatch() {
    const [card1, card2] = this.flippedCards;

    if (card1.value === card2.value) {
      card1.isMatched = card2.isMatched = true;
      this.flippedCards = [];
      this.checkGameWon();
    } else {
      this.disableBoard = true;
      setTimeout(() => {
        card1.isFlipped = card2.isFlipped = false;
        this.flippedCards = [];
        this.disableBoard = false;
      }, 1000);
    }
  }

  checkGameWon() {
    if (this.cards.every(card => card.isMatched)) {
      this.gameWon = true;
      clearInterval(this.timer); // Stop the timer
    }
  }

  resetGame() {
    clearInterval(this.timer); // Reset timer on game reset
    this.setupCards();
    this.startTimer();
  }
}
