import React from 'react';
// import {withRouter} from 'react-router';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

const SongView = () => {
    let { id } = useParams();
  return (
    <div>
        <h3>ID: {id}</h3>
    </div>
  );
};

export default SongView;