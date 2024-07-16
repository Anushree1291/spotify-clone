import React from 'react';
import './PlaylistRow.css';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

function PlaylistRow({ title, playlist }) {
    if (!playlist || !playlist.images || playlist.images.length === 0) {
        return null; // Skip rendering if there are no images
    }

    return (
        <div className='playlistRow'>
            <div className='playlistRow_image'>
                <img src={playlist.images[0].url} alt="" />
                <PlayCircleFilledWhiteIcon className="playIcon" />
            </div>
            <div className='playlistRow_info'>
                <h1>{title}</h1>
                <p className="description">{playlist.description}</p>
            </div>
        </div>
    );
}

export default PlaylistRow;
