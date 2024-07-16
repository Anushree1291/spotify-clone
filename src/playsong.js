function playSong(item) {
    if (item && item.track && item.track.preview_url) {
        // Assuming item.track.preview_url is where the song URL is stored
        const audio = new Audio(item.track.preview_url);
        audio.play();
        // Any other logic related to playing the song
    } else {
        console.error('Cannot play song: Song object is invalid or missing.');
    }
}
