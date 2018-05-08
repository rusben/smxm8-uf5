var calcButtons = document.getElementsByClassName("calc-btn");
var formula = document.getElementById("formula");

var equalButton = document.getElementById("btn-equal");
var resetButton = document.getElementById("btn-reset");

// Array.prototype.forEach.call(calcButtons, function(el) {
//     el.addEventListener("click", formulaAddValue);
// });

// Or

[].forEach.call(calcButtons, function (el) {
  el.addEventListener("click", formulaAddValue);
});

equalButton.addEventListener("click", formulaEval);
resetButton.addEventListener("click", formulaReset);

function formulaAddValue() {
    // console.log(this.value);
    // console.log(formula);
    formula.value = formula.value + this.value;
}

function formulaEval() {
  formula.value = eval(formula.value);
}

function formulaReset() {
  formula.value = "";
}





//console.log(calcButtons);
