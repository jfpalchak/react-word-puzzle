import React from "react";
import GameInfo from "./GameInfo";
import WordPuzzle from "./WordPuzzle";
import InputForm from "./InputForm";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attemptsLeft: 6,
      wordToGuess: 'word',
      guessedLetters: [],
      incorrectGuesses: []
    };
  }

  handleAddingGuessedLetter = (guess) => {
    if (this.state.guessedLetters.includes(guess)) return;

    const newGuessedLetters = [...this.state.guessedLetters, guess];
    const incorrectGuess = !this.state.wordToGuess.includes(guess);
    this.setState(prevState => ({
      guessedLetters: newGuessedLetters,
      attemptsLeft: incorrectGuess ? prevState.attemptsLeft - 1: prevState.attemptsLeft
    }));
  }

  render() {
    const incorrectLetters = this.state.guessedLetters
      .filter(letter => !this.state.wordToGuess.includes(letter));
    const isLoser = this.state.attemptsLeft <= 0;
    const isWinner = this.state.wordToGuess
      .split("")
      .every(letter => this.state.guessedLetters.includes(letter));

    let winState = "";

    if (isLoser) {
      winState = "Game Over";
    } else if (isWinner) {
      winState = "You won!";
    }

    return(
      <main>
        <GameInfo 
          wordToGuess={this.state.wordToGuess}
          incorrectLetters={incorrectLetters}
          attemptsLeft={this.state.attemptsLeft}
          winState={winState} />
        <WordPuzzle 
          wordToGuess={this.state.wordToGuess} 
          guessedLetters={this.state.guessedLetters}
          attemptsLeft={this.state.attemptsLeft}/>
          <div></div>
        <InputForm 
          onLetterInput={this.handleAddingGuessedLetter}/>
      </main>
    );
  }
}

export default Game;