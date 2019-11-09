import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PianoContainer from './containers/PianoContainer';
import SongContainer from './containers/SongContainer';
import SongList from './containers/SongList';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/">
              <div>Welcome to the Tone Piano! I might make this the index and make the third route song show.</div>
            </Route>

            <Route path="/songs">
                <SongList />
            </Route>

            <Route path="/new">
              <div className="App">
                <PianoContainer />
                <SongContainer />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
 
export default App;
