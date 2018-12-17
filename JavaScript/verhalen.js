/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/* eslint-env browser */

var x, i;
var starElement = document.querySelector('#ster');
if (typeof starElement !== 'undefined' && starElement !== null) {
    starElement.addEventListener('click', function () {
        starElement.classList.toggle('favoriet');
    });
}

var searchElement = document.getElementById('search');
var searchInput = document.getElementById('searchInput');
var searchIcon = document.getElementById('search-icon');
var searchText = document.getElementById('search-text');

function search() {
    searchInput.classList.toggle('hidden');
    searchText.classList.toggle('hidden');

    if (!searchInput.classList.contains('hidden')) {
        searchInput.focus();
    }
}

if (typeof searchElement !== 'undefined' && searchElement !== null) {
    searchIcon.addEventListener('click', search);
    searchText.addEventListener('click', search);
}

// de select box voor het genre ophalen
var genreSelect = document.getElementById('genre-select');
//als dit element in de pagina staat
if (typeof genreSelect !== 'undefined' && genreSelect !== null) {
    //zo gauw er een andere optie in de select wordt geselecteerd
    genreSelect.addEventListener('change', function () {
        //pak de geselecteerde value (genre)
        var value = genreSelect.options[genreSelect.selectedIndex].value;

        //de artikelen wrapper
        var artikelenElement = document.getElementById('artikelen');
        //als dat element bestaat
        if (typeof artikelenElement !== 'undefined' && artikelenElement !== null) {
            // alle verhalen die in dat element staan
            var artikelen = artikelenElement.getElementsByClassName('story');

            //doe dit voor alle artikelen. maak alle artikelen weer zichtbaar
            for (x = 0; x < artikelen.length; x++) {
                //verwijder de class hidden, zodat alles weer zichtbaar wordt
                artikelen[x].classList.remove('hidden');
            }

            //als niet de optie 'alles' is geselecteerd
            if (value !== 'all') {
                //loop door alle artikelen
                for (i = 0; i < artikelen.length; i++) {
                    // het artikel
                    var artikel = artikelen[i];
                    //als het artikel niet het geselecteerde genre heeft
                    if (artikel.getAttribute('data-genre') !== value) {
                        // verberg het artikel door de class hidden toe te voegen
                        artikel.classList.add('hidden');
                    }
                }
            }

        }
    });
}

var logo = document.getElementById('logo');
if (typeof logo !== 'undefined' && logo !== null) {
    logo.addEventListener('click', function () {
        window.location.href = 'overzichtspagina.html';
    });
}

