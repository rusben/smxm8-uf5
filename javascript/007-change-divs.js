var clickMes = document.getElementsByClassName("clickMe");

// Array.prototype.forEach.call(kwaks, function(el) {
//     el.addEventListener("click", sayKwak);
// });
// Or
[].forEach.call(clickMes, function (el) {
  el.addEventListener("click", circle);
  el.addEventListener("dblclick", cross);
});

function circle() {
  this.innerHTML = "O";
}

function cross() {
  this.innerHTML = "X";
}
