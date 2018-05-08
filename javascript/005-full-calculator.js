var calcButtons = document.getElementsByClassName("calc-btn");

console.log(calcButtons);

Array.prototype.forEach.call(calcButtons, function(el) {
    el.addEventListener("click", wow);
});

// Or

[].forEach.call(calcButtons, function (el) {
  el.addEventListener("click", wow);
});


function wow() {
    console.log("wow");
}
