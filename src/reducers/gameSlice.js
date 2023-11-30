import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    wordToGuess: 'word',
    guessedLetters: [],
    attemptsLeft: 6
  },
  reducers: {
    guessLetterAdded: (state, action) => {
      const guessedLetter = action.payload;
      state.guessedLetters.push(guessedLetter);
    },
    decrementAttemptsLeft: (state) => {
      state.attemptsLeft -= 1;
    },
    changeWord: (state, action) => {
      const newWord = action.payload;
      state.wordToGuess = newWord;
    }
  }
});

export const { guessLetterAdded, decrementAttemptsLeft, changeWord } = gameSlice.actions;
export default gameSlice.reducer;