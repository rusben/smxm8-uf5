var kwaks = document.getElementsByClassName("kwak");

// Array.prototype.forEach.call(kwaks, function(el) {
//     el.addEventListener("click", sayKwak);
// });
// Or
[].forEach.call(kwaks, function (el) {
  el.addEventListener("click", sayKwak);
});

function sayKwak() {
  console.log("kwak");
}
