//Map
if (document.querySelector('.map-popup')) {
  const map = document.querySelector('.map-popup');
  const map_button_open = document.querySelector('.contacts-map');
  const map_button_close = document.querySelector('.map-popup-close');

  map_button_open.addEventListener("click", function(evt){
    evt.preventDefault();
    map.classList.remove('hidden');
    map.classList.add('animation');
  });

  map_button_close.addEventListener("click", function(evt){
    evt.preventDefault();
    map.classList.add('hidden');
    map.classList.remove('animation');
  });
}



//Write us form
if (document.querySelector('.modal')) {
  const writeus = document.querySelector('.modal');
  const writeus_button_open = document.querySelector('.contacts-button');
  const writeus_button_close = document.querySelector('.modal-close');
  const send_button = writeus.querySelector('.modal-send-button');

  const user_name = writeus.querySelector("[name='user-name']");
  const user_email = writeus.querySelector("[name='user-email']");

  writeus_button_open.addEventListener("click", function(evt){
    evt.preventDefault();
    writeus.classList.remove('hidden');
    writeus.classList.add('animation');
    user_name.focus();
  });

  writeus_button_close.addEventListener("click", function(evt){
    writeus.classList.add('hidden');
    writeus.classList.remove('animation');
    writeus.classList.remove("animation-error");
  });

  writeus.addEventListener("submit", function(evt) {
    if (!user_name.value || !user_email.value) {
      evt.preventDefault();
      writeus.classList.add("animation-error");
    }
    else {
      evt.preventDefault();
      writeus.classList.remove("animation-error");
      writeus.classList.add("hidden");
    }
  })
}



//Catalog-modal
const added = document.querySelector('.modal-added');
const added_buttons_open = document.querySelectorAll('.buy');
const added_button_close = document.querySelector('.modal-added-close');
const create_order = document.querySelector("[name='create-order']");


for (var i = 0; i < added_buttons_open.length; i++) {
  added_buttons_open[i].addEventListener('click', function () {
      added.classList.remove('hidden');
      added.classList.add('animation');
      create_order.focus();
  });
};

added_button_close.addEventListener("click", function(evt){
  evt.preventDefault();
  added.classList.add('hidden');
  added.classList.remove('animation');
});



// Escape
window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27){
    if (!map.classList.contains("hidden")){
      evt.preventDefault();
      map.classList.add("hidden");
      map.classList.remove('animation');
    }
    else if (!writeus.classList.contains("hidden")){
      evt.preventDefault();
      writeus.classList.add("hidden");
      writeus.classList.remove('animation');
      writeus.classList.remove("animation-error");
    }
    else if (!added.classList.contains("hidden")){
      evt.preventDefault();
      added.classList.add("hidden");
      added.classList.remove('animation');
    }
  }
});



//Slider
if (document.querySelector('.slider')) {
    let slides = document.querySelectorAll('.slider-item');

    let radio_buttons = document.querySelectorAll('.slider-radio-input')

    let arrows = document.querySelectorAll('.slider-arrow');

    arrow_prew = arrows[0];
    arrow_next = arrows[1];

    arrow_prew.addEventListener('click', function(){
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.toggle('hidden');
      radio_buttons[i].toggleAttribute('checked');
    };
    });

    arrow_next.addEventListener('click', function(){
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.toggle('hidden');
      radio_buttons[i].toggleAttribute('checked');
    };
    });

}
