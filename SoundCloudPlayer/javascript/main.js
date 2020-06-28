/* Search */



/* Query Soundcloud API */

var SoundCloudAPI = {};

// wrap initialization in anonymous function of Class object
SoundCloudAPI.init = function() {
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
}

// wrap get tracks in anonymous function of Class object
SoundCloudAPI.getTrack = function(inputValue) {
    SC.get('/tracks', {
        q: inputValue
    }).then(function(tracks) {
        console.log(tracks);
    });
}

SoundCloudAPI.init();
SoundCloudAPI.getTrack("Rilo Kiley");

/* Display cards */



/* Add to playlist and play */

