function generateRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';

  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  if (color == '#FFFFFF') { return generateRandomColor(); }
  return color;
}

function resetColor() {
  $('.layout-body').css('background-color', 'white');
}

function setRandomColor() {
  var randomColor = generateRandomColor();
  $('.layout-body').css('background-color', randomColor);
}

$('.btn-reset').on('click', function() {
  resetColor();
});

$('.btn-random').on('click', function() {
  setRandomColor();
});
