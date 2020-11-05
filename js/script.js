let map = document.querySelector('.map-popup');
let map_button_open = document.querySelector('.contacts-map');

map_button_open.onclick = function() {
  map.classList.remove('hidden')
}

let map_button_close = document.querySelector('.map-popup-close');

map_button_close.onclick = function() {
  map.classList.add('hidden')
}


let writeus = document.querySelector('.modal');
let writeus_button_open = document.querySelector('.contacts-button');

writeus_button_open.onclick = function() {
  writeus.classList.remove('hidden')
}

let writeus_button_close = document.querySelector('.modal-close');

writeus_button_close.onclick = function() {
  writeus.classList.add('hidden')
}


let added = document.querySelector('.modal-added');
let added_button_open = document.querySelector('.add');

added_button_open.onclick = function() {
  added.classList.remove('hidden')
}

let added_button_close = document.querySelector('.modal-added-close');

added_button_close.onclick = function() {
  added.classList.add('hidden')
}
