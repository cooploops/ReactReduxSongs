import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if (!props.song) {
        return <div>Select a song</div>;
    }

    const { title, duration } = props.song;
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {title}
                <br />
                Duration: {duration}
            </p>
        </div>
    ); 
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);