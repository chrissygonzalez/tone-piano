import React from 'react';
import piano from '../images/piano.png';

const Intro = () => {
  return (
    <div className="flex-center flex-column flex-center">
      <h1 className="intro">Tone Piano</h1>
      <img src={piano} alt="piano" />
      <div className="text-center intro-buttons">
        <a href="/songs" className="link-button">Browse songs</a>
        <a href="/new"  className="link-button">Play piano</a>
        </div>
    </div>
  );
};

export default Intro;