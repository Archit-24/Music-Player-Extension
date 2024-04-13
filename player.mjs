
    // Get the iframe element
    var spotifyPlayer = document.getElementById('spotifyPlayer');

    // Function to replace {song_id} placeholder in the src attribute
    function replaceSongId(songId) {
        // spotifyPlayer.src = spotifyPlayer.src.replace('{song_id}', songId);
        spotifyPlayer.src = `https://open.spotify.com/embed/track/${songId}?utm_source=generator`
    }
    

    // Listen for messages from the parent window
    window.addEventListener('message', function (event) {
        // Check if the message contains a songId
        if (event.data && event.data.songId) {
            // Replace the {song_id} placeholder with the actual songId
            replaceSongId(event.data.songId);
            console.log('Song ID:', event.data.songId);
        }
    });
