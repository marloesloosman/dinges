/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/* eslint-env browser */

var elements = document.getElementsByTagName('input');
var i;


function update() {
    this.setAttribute('val', this.value);
}

for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener('input', update);
}

