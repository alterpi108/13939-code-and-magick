'use strict';

(function () {

  var getRandomElement = function (elements) {
    return elements[Math.floor(Math.random() * elements.length)];
  };

  var shuffleElements = function (elements) {
    for (var i = elements.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var swap = elements[j];
      elements[j] = elements[i];
      elements[i] = swap;
    }
    return elements;
  };

  window.utils = {
    getRandomElement: getRandomElement,
    shuffleElements: shuffleElements
  };

})();
