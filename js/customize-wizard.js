'use strict';

(function () {

  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');

  var getCustomWizard = function () {
    wizardCoat.addEventListener('click', function () {
      var wizardCoatColor = window.utils.getRandomElement(WIZARD_COAT_COLORS);
      wizardCoat.style.fill = wizardCoatColor;
      wizardCoatInput.value = wizardCoatColor;
    });

    wizardEyes.addEventListener('click', function () {
      var wizardEyesColor = window.utils.getRandomElement(WIZARD_EYES_COLORS);
      wizardEyes.style.fill = wizardEyesColor;
      wizardEyesInput.value = wizardEyesColor;
    });

    wizardFireball.addEventListener('click', function () {
      var wizardFireballColor = window.utils.getRandomElement(WIZARD_FIREBALL_COLORS);
      wizardFireball.style.background = wizardFireballColor;
      wizardFireballInput.value = wizardFireballColor;
    });
  };

  getCustomWizard();

})();
