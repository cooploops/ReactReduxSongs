import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }

    render() {
        return <div className="ui divided list">
            {this.renderList()}
        </div>;
    }
}

// need this function defined to tell what parts of the state we want as props in the component
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

// feed the connect function two arguments, the mapStateToProps function, and an object of all the actionCreators this component needs which will be added to the props of the component
// export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
export default connect(mapStateToProps, { selectSong })(SongList);