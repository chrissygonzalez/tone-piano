import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/fetchSongs'
import { postSong } from '../actions/postSong'
import SongList from '../containers/SongList';
import SongView from '../components/SongView';

class SongsContainer extends Component {
    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/songs/:id" render={(routerProps) => <SongView {...routerProps} songs={this.props.songs}/>} />
                </Switch>
                <Switch>
                    <Route exact path="/songs" render={() => <SongList songs={this.props.songs} />} />
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