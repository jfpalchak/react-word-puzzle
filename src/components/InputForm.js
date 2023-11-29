import PropTypes from 'prop-types';

function InputForm(props) {

  function submissionHandler(event) {
    event.preventDefault();

    props.onLetterInput(event.target.guess.value.toLowerCase());
  }

  return(
    <section className="user-input">
      <form onSubmit={submissionHandler}>
        <input 
          type="text"
          name="guess"
          placeholder="Guess a letter."
          />
        <button type="submit">Guess</button>
      </form>
    </section>
  );
}

InputForm.propTypes = {
  onLetterInput: PropTypes.func
};

export default InputForm;