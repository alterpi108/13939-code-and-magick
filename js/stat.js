'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var BAR_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var COLUMN_SPACE = 50;
  var TEXT_POSITION = 125;
  var TEXT_GAP = 25;
  var BAR_Y = 80;
  var NAME_Y = 100;
  var TIME_Y = 70;

  var renderCloud = function (ctx, x, y, color) {
    var offset = 10;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + CLOUD_WIDTH, y);
    ctx.lineTo(x + CLOUD_WIDTH - offset, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
    ctx.lineTo(x, y + CLOUD_HEIGHT);
    ctx.lineTo(x + offset, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
  };

  var getMaxElement = function (results) {
    var maxElement = results[0];

    for (var i = 0; i < results.length; i++) {
      if (results[i] > maxElement) {
        maxElement = results[i];
      }
    }

    return maxElement;
  };

  var getColor = function (player) {
    return player === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random().toFixed(2) + ')';
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', TEXT_POSITION, CLOUD_Y + TEXT_GAP);
    ctx.fillText('Список результатов: ', TEXT_POSITION, CLOUD_Y + TEXT_GAP * 2);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var columnGap = COLUMN_WIDTH + COLUMN_SPACE;
      var pointPosition = CLOUD_X + COLUMN_SPACE + columnGap * i;
      var columnHeight = BAR_HEIGHT * times[i] / maxTime;

      ctx.fillStyle = getColor(names[i]);
      ctx.fillRect(pointPosition, CLOUD_Y + BAR_Y + BAR_HEIGHT - columnHeight, COLUMN_WIDTH, columnHeight);

      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], pointPosition, CLOUD_Y + NAME_Y + BAR_HEIGHT);
      ctx.fillText(Math.round(times[i]), pointPosition, CLOUD_Y + TIME_Y + BAR_HEIGHT - columnHeight);
    }
  };

})();
