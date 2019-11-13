import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PianoContainer from './containers/PianoContainer';
import SongContainer from './containers/SongContainer';
import SongList from './containers/SongList';
import NavBar from './components/NavBar';
import SongView from './components/SongView';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/">
              <SongList />
            </Route>

            <Route exact path="/songs">
                <SongList />
            </Route>

            <Route exact path="/songs/:id" render={(routerProps) => <SongView {...routerProps} />} />

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
