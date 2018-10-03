'use strict';

var textareaForm = document.querySelector('#area-info');

textareaForm.addEventListener('click', function () {
  validity();
});

textareaForm.addEventListener('focus', function () {
  validity();
});

textareaForm.addEventListener('blur', function () {
  var tetxareaText = 'Опишите подробно все свои восторги';
  textareaForm.textContent = tetxareaText;
});

var validity = function () {
  var tetxareaText = 'Опишите подробно все свои восторги';
  var whiteSpace = '';
  if (tetxareaText) {
    textareaForm.textContent = whiteSpace;
  }
};

var ENTER_CODE = 13;
var labelCheck = document.querySelectorAll('.places-block__wrapper label');
var inputCheck = document.querySelectorAll('.places-block__wrapper input');
var labelCheckImpress = document.querySelectorAll('.impression-block label');
var inputCheckImpress = document.querySelectorAll('.impression-block input');


var pressEnter = function (forLabel, forInput) {
  forLabel.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      toggleAtr(forLabel, forInput);
    }
  });
}

var toggleAtr = function (forLabel, forInput) {
  if (forInput.hasAttribute('checked')) {
    forInput.removeAttribute('checked');
  } else {
    forInput.setAttribute('checked', 'checked');
  }
};

for (var i = 0; i < inputCheck.length; i++) {
  pressEnter(labelCheck[i], inputCheck[i]);
};

for (var i = 0; i < inputCheckImpress.length; i++) {
  pressEnter(labelCheckImpress[i], inputCheckImpress[i]);
};
