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

  render() {
    return (
      <li key={this.props.song.id} className="song-thumb">

          <Link to={`/songs/${this.props.song.id}`}>
            <span className="song-title">{this.props.song.title}</span>
            <p>by {this.props.song.musician_name}</p>
          </Link>

          <button className="favorite" onClick={this.handleClick}><Heart color={this.state.color} /></button>
      </li>
    )}
  };


export default SongThumb;