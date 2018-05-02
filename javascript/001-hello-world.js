alert(porciones(50, 10, 10));
//var elements = document.getElementsByClassName('hidden-class');
// console.log(elements);
// console.log(document);
// Devuelve el número de porciones de pastel
// que le corresponden a cada persona

function porciones(pasteles, personas, ultimaHora) {
  return pasteles / (personas + ultimaHora);
}

var elements = [3, 7, 9, 18, 24, 5, 7, 27, 32, 35, 42, 47];
var person = { firstName : "John",
               lastName : "Doe",
               age : 46,
               olderThan18: function () {
                if (this.age >= 18) return true;
                else return false;
               }
              };
var total = 0;

for (i = 0; i < elements.length; i++) {
 // Instrucciones
  total = total + elements[i];
}

alert(total);

console.log(person);
alert(person.olderThan18());

if (confirm('Eres mayor de 18?')) {
    // Save it!
    console.log("Congratulations");
} else {
    // Do nothing!
    console.log("Ya crecerás");
}
