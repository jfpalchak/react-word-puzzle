import PropTypes from 'prop-types';

function GameInfo({ incorrectLetters, attemptsLeft, winState }) {

  let stateRender;
  if (winState !== "") {
    stateRender = <h1>{winState}</h1>;
  }

  return (
    <section className="game-info">
      <div>
        <h1>Game info</h1>
        {stateRender}
        <h4>Attempts Left: {attemptsLeft}</h4>
        <h4>Incorrect Guesses:</h4>
        <div>
          {incorrectLetters.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

GameInfo.propTypes = {
  incorrectLetters: PropTypes.array,
  attemptsLeft: PropTypes.number,
  wordToGuess: PropTypes.string,
  winState: PropTypes.string
}

export default GameInfo;