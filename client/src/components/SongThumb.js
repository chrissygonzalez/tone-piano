import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Heart from '../svgs/Heart'; 

class SongThumb extends Component {
  constructor(props){
    super(props);
    this.state = {
      favorited: false,
      color: '#999'
    }
  }

  handleClick = () => {
    this.setState({
      favorited: true,
      color: '#f00'
    });
  };

  handleDelete = () => {
    console.log(this.props.song.id);
    // const songObject = {
    //   title: this.state.title,
    //   musician_name: this.state.musician_name,
    //   notes_attributes: this.state.notes
    // }
    // this.props.postSong(songObject);
    // this.setState({
    //     ...this.state,
    //     redirectToList: true
    // })
  }

  render() {
    return (
      <li key={this.props.song.id} className="song-thumb">

          <Link to={`/songs/${this.props.song.id}`}>
            <span className="song-title">{this.props.song.title}</span>
            <p>by {this.props.song.musician_name}</p>
          </Link>

          <button className="favorite" onClick={this.handleClick}><Heart color={this.state.color} /></button>
          <button onClick={this.handleDelete}>Delete</button>
      </li>
    )}
  };


export default SongThumb;