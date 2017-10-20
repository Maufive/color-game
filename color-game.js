var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var message = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  //mode buttons event listeners
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }

  for(var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener('click', function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor) {
        message.textContent = 'Correct! You win!';
        changeColors(clickedColor);
        resetButton.textContent = 'Play again?';
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = 'Try Again!'
      }
    });
  }

  reset();
}



function reset() {
  colors = generateRandomColors(numSquares );
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colors';
  message.textContent = '';

  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function(){
  reset();
});

for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener('click', function(){
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor) {
      message.textContent = 'Correct! You win!';
      changeColors(clickedColor);
      resetButton.textContent = 'Play again?';
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = 'Try Again!'
    }
  });
}

function changeColors(color) {
  for(var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
  return rgb;
}
