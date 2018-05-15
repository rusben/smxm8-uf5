var canvas = document.getElementById('myCanvas');
var playerWidth = 200;
var playerHeight = 100;

function drawPlayer() {

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // Ax, Ay, width, height

    // Punto superior izquierdo del rectángulo
    // Ax => (canvas.width/2)-(playerWidth/2)
    // Ay => (canvas.height)-(playerHeight)

    // Anchura y altura del rectángulo
    // width => playerWidth
    // height => playerHeight
    ctx.fillStyle = "yellow";
    ctx.fillRect((canvas.width/2)-(playerWidth/2), (canvas.height)-(playerHeight), playerWidth, playerHeight);
  }
}

function drawEnemies(nEnemies, gapSize) {

  var enemyWidth = ( canvas.width - ((nEnemies+1)*gapSize) ) / nEnemies;
  console.log("Un enemigo mide de ancho: "+enemyWidth);

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var enemyX = gapSize;
    var enemyY = gapSize;

    for (i=0; i < nEnemies; i++) {
      ctx.fillStyle = getRandomColor();
      ctx.fillRect(enemyX, enemyY, enemyWidth, enemyWidth/2);
      enemyX = enemyX + enemyWidth + gapSize;
    }
  }
}

// https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

drawPlayer();
drawEnemies(5, 10);

/*
fillRect

Definition and Usage

The fillRect() method draws a "filled" rectangle. The default color of the fill is black.

Tip: Use the fillStyle property to set a color, gradient, or pattern used to fill the drawing.
JavaScript syntax: 	context.fillRect(x,y,width,height);
Parameter Values
Parameter 	Description 	Play it
x 	The x-coordinate of the upper-left corner of the rectangle
y 	The y-coordinate of the upper-left corner of the rectangle
width 	The width of the rectangle, in pixels
height 	The height of the rectangle, in pixels
*/
