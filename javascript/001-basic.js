// Variables y tipos

// Boolean
// Null
// Undefined
// Number
// String
// Symbol
// Object

// http://lucybain.com/blog/2015/js-data-types/

//  Las variables en javascript pueden ser declaradas mediante let o var, la diferencia
//  principal entre ambas formas es el ámbito de actuación de la variable. Mientras las variables
//  declaradas con var están activas en el ámbito global del programa, las variables declaradas
//  con let únicamente están accesibles dentro del bloque de código en el que se declaren.
//  Al principio y para simplificar usaremos var.

//  Más info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

var numero = 7;
var texto = "Esto es una cadena de texto";
var nulo = null;
var indefinida;

console.log("Variables");
console.log("Número: "+numero+" más texto");
console.log("Texto: "+texto);
console.log("Nulo: "+nulo);
console.log("Indefinida: "+indefinida);


//   Queremos repartir un cierto número de pasteles entre las personas asistentes a una fiesta,
//   teniendo en cuenta que a última hora siempre s eapunta alguien más.
//   Calcula la porción de pastel que le corresponde a cada persona.

function porciones(pasteles, personas, ultimaHora) {
  if (pasteles < 10 || pasteles > 5) {
    // Se cumnple la condición
    return 0;
  } else {
    // No se cumple la condición
    console.log("Hola");
  }

  return pasteles / (personas + ultimaHora);
}

//  Llamada a la función porciones que resuelve el problema anterior, con
//  50 pasteles, 10 personas y 3 asistentes de última hora

console.log("Porciones");
console.log(porciones(50, 10, 3));


//  Definición de un objecto representando una persona, con nombre, apellido, edad y la funcion olderThan18

var person = { firstName : "John",
               lastName : "Doe",
               age : 46,
               olderThan18: function () {
                if (this.age >= 18) return true;
                else return false; }
              };

console.log("Persona");
console.log(person);
console.log("Persona mayor de 18 años? "+person.olderThan18());


//   Capturamos del DOM (Document Object Model) cada div de la clase
//   'hidden-class' del documento html
var divsOcultas = document.getElementsByClassName('hidden-class');
console.log("Objectos del DOM que tienen el atributo class en 'hidden-class'");
console.log(divsOcultas);

//  Suma los elementos de la lista elements
var elements = [3, 7, 9, 18, 24, 5, 7, 27, 32, 35, 42, 47];

var total = 0;
for (i = 0; i < elements.length; i++) {
 // Instrucciones
  total = total + elements[i];
}

console.log("Suma de los elementos de la lista 'elements'");
console.log(total);

//   Muestra un cuadro de diálogo con yes/no

if (confirm('Eres mayor de 18?')) {
    // Code if true
    console.log("Congratulations");
} else {
    // Code if false
    console.log("Ya crecerás");
}
