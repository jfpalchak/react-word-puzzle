import PropTypes from 'prop-types';

function WordPuzzle({ wordToGuess, guessedLetters }) {

  return (
    <section className="word-puzzle">
      {wordToGuess.split("").map((letter, index) => (
          <div key={index} className="letter-box">
            <span 
            className="letter"
            style={{
              visibility: 
              guessedLetters.includes(letter) ? "visible" : "hidden"
            }}
            >
              {letter}
            </span>
          </div>
      ))}
    </section>
  );
}

WordPuzzle.propTypes = {
  wordToGuess: PropTypes.string,
  guessedLetters: PropTypes.array,
  attemptsLeft: PropTypes.number
}

export default WordPuzzle;