var unit = 10;

var padButtons = document.getElementsByClassName("pad-btn");

var player = document.getElementById("player");

 player.style.left = 0;


[].forEach.call(padButtons, function (el) {
  el.addEventListener("click", buttonClicked);
});

function buttonClicked() {
    switch (this.value) {
      case "left":  moveLeft();
                    break;
      case "right": moveRight();
                    break;
      case "up":    moveUp();
                    break;
      case "down":  moveDown();
                    break;
    }
}

function moveLeft() {
  var player = document.getElementById("player");

//  player.style.left = "10px";


  player.style.left = Number(player.style.left.substring(0, player.style.left.length-2)) - Number(unit ) + "px";
    console.log(player.style.left.substring(0, player.style.left.length-2));
  //console.log(player.style.left);


}
