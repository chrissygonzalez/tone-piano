import React from 'react';
import SongControls from './SongControls';
import Piano from './Piano';

const ComposeContainer = (props) => {
  return (
    <div className="text-center">
        <Piano />
        <SongControls />
    </div>
  );
};

export default ComposeContainer;