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

SoundCloudAPI.renderTracks = function() {

    var card = document.createElement('div');
    card.classList.add('card');

    var image = document.createElement('div');
    image.classList.add('image');

    var artwork = document.createElement('img');
    artwork.classList.add('image_img');
    artwork.src = '#';

    var content = document.createElement('div');
    content.classList.add('content');

    var header = document.createElement('div');
    header.classList.add('header');

    var link = document.createElement('a');
    link.href = '#';
    link.target = '_blank';
    link.innerHTML = 'Rilo Kiley';

    var footer = document.createElement('div');
    footer.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

    var icon = document.createElement('i');
    icon.classList.add('add', 'icon');

    var subtitle = document.createElement('span');
    subtitle.innerHTML = 'Add to playlist';

    var searchResults = document.querySelector('.js-search-results');

    card.appendChild(image);
    image.appendChild(artwork);

    card.appendChild(content);
    content.appendChild(header);
    header.appendChild(link);

    card.appendChild(footer);
    footer.appendChild(icon);
    footer.appendChild(subtitle);

    searchResults.appendChild(card);
}

SoundCloudAPI.renderTracks();

/* Display cards */



/* Add to playlist and play */

