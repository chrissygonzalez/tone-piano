import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/fetchSongs'
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
                    <Route exact path="/songs" render={() => <SongList songs={this.props.songs} />} />
                    <Route exact path="/new" render={() => <SongView newSong={true}  redirectToList={false} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSongs: () => dispatch(fetchSongs())
    };
};

export default connect( mapStateToProps, mapDispatchToProps)(SongsContainer);