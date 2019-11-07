import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Test from './test';
import PianoContainer from './containers/PianoContainer';
import SongContainer from './containers/SongContainer';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    Test.getSongs();

    return (
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/">
              <div>Welcome to the Tone Piano! I might make this the index and make the third route song show.</div>
            </Route>

            <Route path="/songs">
              <div>All Songs</div>
            </Route>

            <Route path="/new">
              <div className="App">
                <SongContainer />
                <PianoContainer />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
