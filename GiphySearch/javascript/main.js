/* 1. grab input */

document.querySelector(".js-go").addEventListener('click', function() {

    var input = document.querySelector('input').value;
    pushToDOM(input);

});

/* 2. API handling */



/* 3. show GIFs */
function pushToDOM(input) {

    var container = document.querySelector(".js-container");
    container.innerHTML = input;

}
