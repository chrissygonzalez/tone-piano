import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/fetchSongs'
import { postSong } from '../actions/postSong'
import NavBar from '../components/NavBar';
import SongList from '../components/SongList';
import SongView from './SongView';

class SongsContainer extends Component {
    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {
        return (
            <div>
                <NavBar />

                <Switch>
                    <Route exact path="/songs/:id" render={(routerProps) => <SongView {...routerProps} newSong={false}/>} redirectToList={false} />
                </Switch>

                <Switch>
                    <Route exact path="/songs" render={() => <SongList songs={this.props.songs} />} />
                </Switch>

                <Switch>
                    <Route exact path="/new" render={() => <SongView newSong={true}  toList={false} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        song: state.song,
        songs: state.songs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearSong: () => dispatch({ type: 'CLEAR_SONG' }),
        postSong: (songObject) => dispatch(postSong(songObject)),
        fetchSongs: () => dispatch(fetchSongs())
    };
};

export default connect( mapStateToProps, mapDispatchToProps)(SongsContainer);