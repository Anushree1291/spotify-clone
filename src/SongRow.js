import React from 'react';
import './SongRow.css';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

function SongRow({ track, spotify }) {
    if (!track || !track.album || !track.album.images || track.album.images.length === 0) {
        return null; // Skip rendering if there are no images
    }

    const playSong = () => {
        // Logic to play the song
        spotify.play({
            uris: [`spotify:track:${track.id}`]
        }).then(() => {
            console.log('Playing:', track.name);
        }).catch(error => console.error('Error playing song:', error));
    };

    return (
        <div className='songRow' onClick={playSong}>
            <div className='songRow_image'>
                <img src={track.album.images[0].url} alt="" />
                <PlayCircleFilledWhiteIcon className="playIcon" />
            </div>
            <div className='songRow_info'>
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist) => artist.name).join(", ")} - {track.album.name}</p>
                <p className="description">{track.album.release_date}</p>
            </div>
        </div>
    );
}

export default SongRow;
