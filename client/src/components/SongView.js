import React from 'react';

const SongView = (props) => {
    console.log(props.match.params.id);
//   const { params: { id } } = match;
  return (
    <div>
        {/* <h3>ID: {id}</h3> */}
    </div>
  );
};

export default SongView;