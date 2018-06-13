'use strict';

var WIZARD_FIRSTNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_QUANTITY = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');

var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');
var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');
var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
var wizardFireballInput = userDialog.querySelector('input[name="fireball-color"]');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListItem = userDialog.querySelector('.setup-similar-list');

var getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
};

var generateWizard = function () {
  var wizard = {
    name: getRandomElement(WIZARD_FIRSTNAMES) + ' ' + getRandomElement(WIZARD_LASTNAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  };

  return wizard;
};

var getWizardFeatures = function (quantity) {
  var features = [];

  for (var i = 0; i < quantity; i++) {
    features[i] = generateWizard();
  }

  return features;
};

var wizards = getWizardFeatures(WIZARD_QUANTITY);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARD_QUANTITY; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListItem.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement !== userNameInput) {
    closePopup();
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var getCustomWizard = function () {
  wizardCoat.addEventListener('click', function () {
    var wizardCoatColor = getRandomElement(WIZARD_COAT_COLORS);
    wizardCoat.style.fill = wizardCoatColor;
    wizardCoatInput.value = wizardCoatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var wizardEyesColor = getRandomElement(WIZARD_EYES_COLORS);
    wizardEyes.style.fill = wizardEyesColor;
    wizardEyesInput.value = wizardEyesColor;
  });

  wizardFireball.addEventListener('click', function () {
    var wizardFireballColor = getRandomElement(WIZARD_FIREBALL_COLORS);
    wizardFireball.style.background = wizardFireballColor;
    wizardFireballInput.value = wizardFireballColor;
  });
};

getCustomWizard();
