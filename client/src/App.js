import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Intro from './components/Intro';
import SongsContainer from './containers/SongsContainer';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Intro}/>
          <Route component={SongsContainer}/>
        </Switch>
      </div>
    );
  }
}
 
export default App;
