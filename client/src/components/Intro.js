import React from 'react';

const Intro = () => {
  return (
    <div className="flex-center flex-column">
      <h1 className="intro">Tone Piano</h1>
      <div className="text-center">
        <a href="/songs" className="link-button">Browse songs</a>
        <a href="/new"  className="link-button">Play piano</a>
        </div>
    </div>
  );
};

export default Intro;