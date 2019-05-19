import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ myselectedSong }) => {
    console.log(myselectedSong);
    if(!myselectedSong) {
        return <div>Select a song!</div>;
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title:  { myselectedSong.title }
                <br />
                Duration: { myselectedSong.duration }
            </p>
           
        </div>
    );
};

const mapStateToProps = (state) => {
    return { myselectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
