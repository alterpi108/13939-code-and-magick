'use strict';

(function () {

  var WIZARD_QUANTITY = 4;

  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarListItem = setup.querySelector('.setup-similar-list');

  setup.querySelector('.setup-similar').classList.remove('hidden');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderRandomWizards = function (wizards) {
    var fragment = document.createDocumentFragment();

    wizards = window.utils.shuffleElements(wizards);

    for (var i = 0; i < WIZARD_QUANTITY; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListItem.appendChild(fragment);
  };

  window.backend.load(renderRandomWizards, window.renderError);

})();
