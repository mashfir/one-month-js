/* 1. grab input */

document.querySelector(".js-go").addEventListener('click', function() {

    var input = document.querySelector('input').value;
    get_gifs(input);

});

document.querySelector(".js-userinput").addEventListener('keyup', function(e) {

    var input = document.querySelector('input').value;

    // 'Enter' has keyCode 13
    if(e.which === 13) {
        get_gifs(input);
    }

});

/* 2. API handling */

function get_gifs(query) {

    var url = 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=NgCTfkDrio3ySlBzktPUx6L67J2bRJeL';

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function(e) {

        // your callback events go here 
        var data = e.target.response;
        pushToDOM(data);

    });

}

/* 3. show GIFs */
function pushToDOM(input) {

    var response = JSON.parse(input);

    var imageUrls = response.data;
    var container = document.querySelector(".js-container");

    container.innerHTML = '';

    imageUrls.forEach(function(image) {

        var src = image.images.fixed_height.url;

        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

    });

}
