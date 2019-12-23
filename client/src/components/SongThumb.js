import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Heart from '../svgs/Heart'; 

class SongThumb extends Component {
  constructor(props){
    super(props);
    this.state = {
      favorited: false
    }
  }

  handleClick = () => {
    this.setState({
      favorited: !this.state.favorited
    });
  };

  render() {
    return (
      <li key={this.props.song.id} className="song-thumb">

          <Link to={`/songs/${this.props.song.id}`}>
            <span className="song-title">{this.props.song.title}</span>
            <p>by {this.props.song.musician_name}</p>
          </Link>

          <button className="favorite" onClick={this.handleClick}><Heart color={this.state.favorited ? '#f00' : '#999'} /></button>
          <button onClick={() => this.props.delete(this.props.song.id)}>Delete</button>
      </li>
    )}
  };


export default SongThumb;