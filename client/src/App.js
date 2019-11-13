import React, { Component } from 'react';
import './App.css';
import SongsContainer from './containers/SongsContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SongsContainer />
      </div>
    );
  }
}
 
export default App;
