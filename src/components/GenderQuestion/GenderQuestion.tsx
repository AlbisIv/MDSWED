import { useState } from 'react';

/* eslint-disable jsx-a11y/label-has-associated-control */
type GenderQuestionProps = {
    onBack: () => void
    onRadioChange: (value: string) => void
    onSave: () => void
  }
const GenderQuestion = ({
  onBack, onRadioChange, onSave,
}: GenderQuestionProps) => {
  const [radioValue, setRadioValue] = useState('');
  return (
    <section className="showcase-panel">
      <h1>Question 2</h1>
      <p>Please select your gender:</p>
      <form>
        <label>
          <input
            name="gender"
            required
            type="radio"
            value="male"
            onChange={(e) => {
              onRadioChange(e.target.value);
              setRadioValue('male');
            }}
          />
          Male
        </label>
        {' '}
        <label>
          <input
            name="gender"
            required
            type="radio"
            value="female"
            onChange={(e) => {
              onRadioChange(e.target.value);
              setRadioValue('female');
            }}
          />
          Female
        </label>
        <br />
        <div className="btn-container">
          <button
            className="btn btn-secondary"
            onClick={() => {
              onBack();
            }}
          >
            Back
          </button>
          <button
            disabled={!radioValue}
            className="btn btn-primary"
            onClick={() => {
              onSave();
            }}
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default GenderQuestion;
