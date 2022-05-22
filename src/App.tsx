/* eslint-disable jsx-a11y/label-has-associated-control */
// npm i axios
// npm install react-router-dom@6
import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import GenderQuestion from './components/GenderQuestion/GenderQuestion';

// TODO https://design.swedbankpay.com/v/9.1.0/patterns/forms
// TODO
const initialFormData = {
  email: '',
  gender: '',
  favoriteLoTRMovie: '',
  likedAnimals: [] as string[],
  aboutMe: '',
};
const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [activeQuestion, setActiveQuestion] = useState(-1);
  const [error, setError] = useState('');
  const [animalList, setAnimalList] = useState<string[]>([]);

  return (
    <main className="doc-view">
      {activeQuestion === -1 && (
      <section className="showcase-panel">
        <h1>A small form</h1>
        <p>Hi, please take your time to fill out this small form.</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            setActiveQuestion(activeQuestion + 1);
          }}
        >
          Start
        </button>

      </section>
      )}
      {activeQuestion === 0 && (
        <section className="showcase-panel">
          <h1>Question 1</h1>
          <div className="form-group has-error">
            <label htmlFor="input-error-client-example">Email</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              type="text"
              className="form-control"
              value={formData.email}
            />
            {error && <p className="help-block">{error}</p>}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setError('');

              if (!formData.email) {
                setError('This field is mandatory');

                return;
              } if (!formData.email.includes('@')) {
                setError('The email address must include @');
                return;
              }

              setActiveQuestion(activeQuestion + 1);
            }}
          >
            Save
          </button>
        </section>
      )}
      {activeQuestion === 1 && (
      <GenderQuestion
        onBack={() => {
          setActiveQuestion(activeQuestion - 1);
        }}
        onRadioChange={(value) => {
          setFormData({ ...formData, gender: value });
        }}
        onSave={() => {
          setActiveQuestion(activeQuestion + 1);
        }}
      />
      )}
      {activeQuestion === 2 && (
        <section className="showcase-panel">
          <h1>Question 3</h1>
          <div className="form-group has-error">
            <label htmlFor="movies">Please select your favourite LoTR movie(extended 4h edition):</label>
            <br />
            <select
              onChange={(e) => {
                setFormData({ ...formData, favoriteLoTRMovie: e.target.value });
              }}
              className="form-control"
              name="movies"
              id="movies"
            >
              <option value="Fellowship of the Ring">Fellowship of the Ring</option>
              <option value="The Two Towers">The Two Towers</option>
              <option value="The Return of the King">The Return of the King</option>
              <option value="hobbits" disabled>Hobbits trilogy</option>
            </select>
            {error && <p className="help-block">{error}</p>}

          </div>
          <div className="btn-container">
            <button
              className="btn btn-secondary"
              onClick={() => {
                setActiveQuestion(activeQuestion - 1);
              }}
            >
              Back
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setError('');

                if (!formData.favoriteLoTRMovie) {
                  setError('This field is mandatory');

                  return;
                }
                setActiveQuestion(activeQuestion + 1);
              }}
            >
              Save
            </button>
          </div>
        </section>
      )}
      {activeQuestion === 3 && (
      <section className="showcase-panel">
        <h1>Question 4</h1>
        <p>Please select the animals, that you like!</p>
        <div className="form-group has-error">
          <input
            onChange={(e) => {
              if (animalList.includes(e.target.value)) {
                setAnimalList(animalList.filter((a) => a !== e.target.value));
              } else {
                setAnimalList(animalList.concat(e.target.value));
              }
            }}
            type="checkbox"
            id="animal1"
            name="animal1"
            value="cat"
            checked={animalList.includes('cat')}

          />
          <label htmlFor="animal1">  I like cats</label>
          <br />
          <input
            onChange={(e) => {
              if (animalList.includes(e.target.value)) {
                setAnimalList(animalList.filter((a) => a !== e.target.value));
              } else {
                setAnimalList(animalList.concat(e.target.value));
              }
            }}
            type="checkbox"
            id="animal2"
            name="animal2"
            value="dog"
            checked={animalList.includes('dog')}

          />
          <label htmlFor="animal2">  I like dogs</label>
          <br />
          <input
            onChange={(e) => {
              if (animalList.includes(e.target.value)) {
                setAnimalList(animalList.filter((a) => a !== e.target.value));
              } else {
                setAnimalList(animalList.concat(e.target.value));
              }
            }}
            type="checkbox"
            id="animal3"
            name="animal3"
            value="bird"
            checked={animalList.includes('bird')}
          />
          <label htmlFor="animal3">  I like birds</label>
          <br />
        </div>
          {error && <p className="help-block">{error}</p>}
        <div className="btn-container">

          <button
            className="btn btn-secondary"
            onClick={() => {
              setActiveQuestion(activeQuestion - 1);
            }}
          >
            Back
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFormData({ ...formData, likedAnimals: animalList });
              setActiveQuestion(activeQuestion + 1);
            }}
          >
            Save
          </button>
        </div>
      </section>
      )}
      {activeQuestion === 4 && (
      <section className="showcase-panel">
        <h1>Question 5</h1>
        <div className="tooltip">
          Please write about yourself!
          <p className="tooltiptext">Write a small description about yourself!</p>
        </div>
        <br />
        <div className="form-group has-error">
          <textarea
            id="aboutme"
            name="aboutme"
            placeholder="Write here:"
            onChange={(e) => { setFormData({ ...formData, aboutMe: e.target.value }); }}
            value={formData.aboutMe}
          />
        </div>
        <br />
        {error && <p className="help-block">{error}</p>}
        <div className="btn-container">

          <button
            className="btn btn-secondary"
            onClick={() => {
              setActiveQuestion(activeQuestion - 1);
            }}
          >
            Back
          </button>
          <button
            disabled={!formData.aboutMe}
            className="btn btn-primary"
            onClick={() => {
              setActiveQuestion(activeQuestion + 1);
            }}
          >
            Save
          </button>
        </div>
      </section>
      )}
      {activeQuestion === 5 && (
      <section className="showcase-panel">
        <h1>Overview</h1>
        <p>Is the information valid?</p>
        <div className="form-group has-error">
          <p>
            Your email:
            {' '}
            {formData.email}
          </p>
          <p>
            Your gender:
            {' '}
            {formData.gender}
          </p>
          <p>
            Your favourite LoTR movie:
            {' '}
            {formData.favoriteLoTRMovie}
          </p>
          <p>
            Information about yourself:
            {' '}
            {formData.aboutMe}
          </p>
        </div>
        <br />
        <div className="btn-container">

          <button
            className="btn btn-secondary"
            onClick={() => {
              setActiveQuestion(activeQuestion - 1);
            }}
          >
            Back
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setActiveQuestion(activeQuestion + 1);
            }}
          >
            Save
          </button>
        </div>
      </section>
      )}
      {activeQuestion === 6 && (
      <section className="showcase-panel">
        <h1>Thank you! Your information has been saved!</h1>

      </section>
      )}
    </main>
  );
};

export default App;
