import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
  render() {
    console.log(this.props.song);
    if (!this.props.song) {
      return <diV>Select a Song</diV>;
    }
    return (
      <div>
        <h3>Details for :</h3>
        <p>Title : {this.props.song.title}</p>
        <p>Duration : {this.props.song.duration}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
