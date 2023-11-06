document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const songTitleElement = document.querySelector('.song-info h2');
    const artistElement = document.querySelector('.song-info p');

    // Update song information when a new track is loaded
    audioPlayer.addEventListener('loadedmetadata', function() {
        const duration = formatTime(audioPlayer.duration);
        songTitleElement.textContent = 'Song Title';
        artistElement.textContent = 'Artist Name';
    });

    // Function to format time in MM:SS format
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
});