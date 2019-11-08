import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Test from './test';
import { connect } from 'react-redux';
import PianoContainer from './containers/PianoContainer';
import SongContainer from './containers/SongContainer';
import NavBar from './components/NavBar';
import { fetchSongs } from './actions/fetchSongs'

class App extends Component {

  handleClick = () => {
    this.props.fetchSongs();
    console.log(this.props.songs)
  }

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
              <div>All Songs <button onClick={this.handleClick}>Get Songs</button> {this.props.songs.map(song => song.title)}</div>
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

function mapDispatchToProps(dispatch){
  return { fetchSongs: () => dispatch(fetchSongs()) }
}
 
function mapStateToProps(state){
  return {songs: state.songs}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)
