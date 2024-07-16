import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlaylistRow from './PlaylistRow';
import SongRow from './SongRow';
import {playSong} from "./playsong";

function Body({ spotify, onItemClick }) {
    const [{ discover_weekly, playlists, newReleases, featuredplaylists, categories, mysavedtracks, userplaylists, followedartists, recommendations }, dispatch] = useDataLayerValue();
    
    const playSong = (item) => {
        if (item && item.track && item.track.preview_url) {
            const audio = new Audio(item.track.preview_url);
            audio.play();
            // Additional logic for playing the song
        } else {
            console.error('Cannot play song: Song object is invalid or missing.');
        }
    };



    return (
        <div className='body'>
            <Header spotify={spotify}/>
            
            <div className='body_sections'>
                <div className='section'>
                    <h2>Liked Songs</h2>
                    <div className='row'>
                        {mysavedtracks?.items?.map(item => (
                            <SongRow key={item.track.id} track={item.track} onClick={() => playSong(item)}/>
                        )) || <p>No saved tracks found</p>}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Made For You</h2>
                    <div className='row'>
                        <PlaylistRow title="Discover Weekly" playlist={discover_weekly} onClick={() => onItemClick(discover_weekly)} />
                        {recommendations?.tracks?.map(track => (
                            <SongRow key={track.id} track={track} onClick={() => onItemClick(track)}/>
                        ))}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Recommendations</h2>
                    <div className='row'>
                        {recommendations?.tracks?.map(track => (
                            <SongRow key={track.id} track={track} onClick={() => onItemClick(track)}/>
                        ))}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Recently Played</h2>
                    <div className='row'>
                        {playlists?.items?.map(playlist => (
                            <PlaylistRow key={playlist.id} title={playlist.name} playlist={playlist} onClick={() => onItemClick(playlist)} />
                        ))}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Top Mixes</h2>
                    <div className='row'>
                        {categories?.items?.map(category => (
                            <PlaylistRow key={category.id} title={category.name} playlist={category} onClick={() => onItemClick(category)}/>
                        ))}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Popular Albums</h2>
                    <div className='row'>
                        {newReleases?.albums?.items?.map(album => (
                            <PlaylistRow key={album.id} title={album.name} playlist={album} onClick={() => onItemClick(album)}/>
                        ))}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>India's Best</h2>
                    <div className='row'>
                        {/* Add content specific to India's Best */}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Best Hollywood</h2>
                    <div className='row'>
                        {/* Add content specific to Best Hollywood */}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Global Trending</h2>
                    <div className='row'>
                        {/* Add content specific to Global Trending */}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Podcast Episodes</h2>
                    <div className='row'>
                        {/* Add content specific to Podcast Episodes */}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Favourite Artists</h2>
                    <div className='row'>
                        {followedartists?.artists?.items?.map(artist => (
                            <PlaylistRow key={artist.id} title={artist.name} playlist={artist} onClick={() => onItemClick(artist)}/>
                        ))}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>New Releases</h2>
                    <div className='row'>
                        {newReleases?.albums?.items?.map(album => (
                            <PlaylistRow key={album.id} title={album.name} playlist={album} onClick={() => onItemClick(album)}/>
                        ))}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Recommended For Today</h2>
                    <div className='row'>
                        {recommendations?.tracks?.map(track => (
                            <SongRow key={track.id} track={track} onClick={() => onItemClick(track)}/>
                        ))}
                    </div>
                </div>
                
                <div className='section'>
                    <h2>Charts</h2>
                    <div className='row'>
                        {/* Add content specific to Charts */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
