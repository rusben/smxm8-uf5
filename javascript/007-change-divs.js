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

// 0: casilla vacía
// 1: rojo
// 2: azul
var items = [
  [0,1,2,1],
  [0,2,1,2],
  [1,2,1,1]
];
console.log(items[0][0]); // 1
console.log(items);
