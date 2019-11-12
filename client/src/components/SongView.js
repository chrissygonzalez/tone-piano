import React from 'react';

const SongView = ({match}) => {
  const { params: { id } } = match;
  return (
    <div>
        <h3>ID: {id}</h3>
    </div>
  );
};

export default SongView;