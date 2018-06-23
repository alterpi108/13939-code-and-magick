'use strict';

(function () {

  var WIZARD_FIRSTNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_QUANTITY = 4;

  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarListItem = setup.querySelector('.setup-similar-list');

  setup.querySelector('.setup-similar').classList.remove('hidden');

  var generateWizard = function () {
    var wizard = {
      name: window.util.getRandomElement(WIZARD_FIRSTNAMES) + ' ' + window.util.getRandomElement(WIZARD_LASTNAMES),
      coatColor: window.util.getRandomElement(WIZARD_COAT_COLORS),
      eyesColor: window.util.getRandomElement(WIZARD_EYES_COLORS)
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

})();
