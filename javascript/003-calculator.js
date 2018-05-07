var operandA;
var operandB;
var result;



function sum() {
  updateOperands();
  setResult(Number(operandA.value) + Number(operandB.value));
}

function sub() {
  updateOperands();
  setResult(Number(operandA.value) - Number(operandB.value));
}

function mul() {
updateOperands();
  setResult(Number(operandA.value) * Number(operandB.value));
}

function div() {
  updateOperands();
  setResult(Number(operandA.value) / Number(operandB.value));
}

function updateOperands() {
  operandA = document.getElementById("operand-a");
  operandB = document.getElementById("operand-b");
  result = document.getElementById("result");
}

function setResult(myValue) {
  result.value = myValue;
}
