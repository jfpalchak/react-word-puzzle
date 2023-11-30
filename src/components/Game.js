import React from "react";
import GameInfo from "./GameInfo";
import WordPuzzle from "./WordPuzzle";
import InputForm from "./InputForm";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { guessLetterAdded, decrementAttemptsLeft } from "../reducers/gameSlice";

// class Game extends React.Component {
  // constructor(props) {
    //   super(props);
    //   this.state = {
      //     attemptsLeft: 6,
      //     wordToGuess: 'word',
      //     guessedLetters: [],
      //     incorrectGuesses: []
      //   };
      // }
function Game () {

  const dispatch = useDispatch();
  const game = useSelector(state => state.game);
  console.log(game);

  const handleAddingGuessedLetter = (guess) => {
    if (game.guessedLetters.includes(guess) || guess.length > 1 ) return;

    // const newGuessedLetters = [...game.guessedLetters, guess];
    const incorrectGuess = !game.wordToGuess.includes(guess);

    dispatch(guessLetterAdded(guess));
    console.log('guessed');
    if (incorrectGuess) {
      dispatch(decrementAttemptsLeft());
    }
    // this.setState(prevState => ({
    //   guessedLetters: newGuessedLetters,
    //   attemptsLeft: incorrectGuess ? prevState.attemptsLeft - 1: prevState.attemptsLeft
    // }));
  }

  const incorrectLetters = game.guessedLetters
    .filter(letter => !game.wordToGuess.includes(letter));
  const isLoser = game.attemptsLeft <= 0;
  const isWinner = game.wordToGuess
    .split("")
    .every(letter => game.guessedLetters.includes(letter));

  let winState = "";

  if (isLoser) {
    winState = "Game Over";
  } else if (isWinner) {
    winState = "You won!";
  }

  return(
    <main>
      <GameInfo 
        wordToGuess={game.wordToGuess}
        incorrectLetters={incorrectLetters}
        attemptsLeft={game.attemptsLeft}
        winState={winState} />
      <WordPuzzle 
        wordToGuess={game.wordToGuess} 
        guessedLetters={game.guessedLetters}
        attemptsLeft={game.attemptsLeft}/>
        <div></div>
      <InputForm 
        onLetterInput={handleAddingGuessedLetter}/>
    </main>
  );

}

export default Game;