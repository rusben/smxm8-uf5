var elements = [3, 7, 9, 18, 24, 5, 7, 27, 32, 35, 42, 47];

// Retorna la suma de los números que son estrictamente mayores que 18
function greaterThan18(elements) {

  var total = 0;

  for (i = 0; i < elements.length; i++) {
    if (elements[i] > 18) {
      total = total + elements[i];
    }
  }

  return total;
}

document.getElementById("A").innerHTML = greaterThan18(elements);


// Retorna la suma de los números que son estrictamente mayores que 18
// y que además son pares
function greaterThan18Odd(elements) {

  var total = 0;

  for (i = 0; i < elements.length; i++) {
    if ((elements[i] > 18) && (elements[i] % 2 == 0)) {
      total = total + elements[i];
    }
  }

  return total;
}

document.getElementById("B").innerHTML = greaterThan18Odd(elements);

// Retorna la suma de los números que son estrictamente mayores que 18
// y que además son pares y que se encuentran en posiciones impares del vector
function greaterThan18OddEvenPositions(elements) {

  var total = 0;

  for (i = 0; i < elements.length; i++) {

    if ((elements[i] > 18) &&
        (elements[i] % 2 == 0) &&
        (i % 2 == 1)) {
      total = total + elements[i];
    }

  }

  return total;
}


document.getElementById("C").innerHTML = greaterThan18OddEvenPositions(elements);

// Retorna la multiplicación de los números que son estrictamente mayores que 18
// y que además son pares y que se encuentran en posiciones pares del vector
function multiplyAll(elements) {

  if (elements.length == 0) return 0;
  else {
    var total = 1;

    for (i = 0; i < elements.length; i++) {

      if ((elements[i] > 18) &&
          (elements[i] % 2 == 0) &&
          (i % 2 == 0)) {
        total = total * elements[i];
      }

    }
  }

  return total;
}


document.getElementById("D").innerHTML = multiplyAll(elements);
