var cels = document.getElementsByClassName("cel");
var turnPlayer = "X";

[].forEach.call(cels, function (el) {
  el.addEventListener("click", celClicked);
});

function celClicked() {
  //console.log(this);
  if (this.innerHTML == "") { // If cell is empty
    play(this);
    changePlayer();
  }
}

function play(el) {
  el.innerHTML = turnPlayer;
}

function changePlayer() {
  if (turnPlayer == "X") {
    turnPlayer = "O";
  } else if (turnPlayer == "O") {
    turnPlayer = "X";
  }
}
