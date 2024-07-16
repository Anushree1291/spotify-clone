import React from 'react';

function DetailView({ item }) {
    if (!item) return null;

    // Logic to determine if it's an album, artist, etc., and render accordingly
    return (
        <div className="detailView">
            <img src={item.images[0].url} alt="" />
            <h2>{item.name}</h2>
            {/* Render songs or additional information */}
            {/* Example: Display songs in the album */}
            {item.tracks.items.map((song, index) => (
                <div key={index}>
                    <p>{song.name}</p>
                    {/* Add more details as needed */}
                </div>
            ))}
        </div>
    );
}

export default DetailView;
