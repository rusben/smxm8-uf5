var slider = document.getElementById('slider');
var sliderImages = slider.getElementsByClassName('slider-img');
var nextButton = slider.getElementsByClassName('next-btn')[0];
var previousButton = slider.getElementsByClassName('previous-btn')[0];

var nImages = sliderImages.length;

// Linka el evento click a la función que corresponde a cada botón
nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);

var index = 0;

// Ocultar todas las imágenes
[].forEach.call(sliderImages, function (anImage) {
  anImage.style.display = "none";
});

showImage(index);

// Actualiza el índice con el valor esperado después de hacer next
function next() {
  hideImage(index);
  index = (index + 1) % nImages;
  showImage(index);
  // console.log(index);
}

// Actualiza el índice con el valor esperado después de hacer previous
function previous() {
  hideImage(index);
  if (index == 0) {       // Si el índice vale 0
    index = nImages -1;   // Caso especial (no puedo restar normalment)
                          // El índice tiene que pasar a valer el número de imagenes menos 1.
  } else {                // Puedo restar normalmente
    index = index -1;
  }
  showImage(index);
  // console.log(index);
}

function showImage(myIndex) { // Tiene que capturar del document la imagen con índice myIndex
  sliderImages[myIndex].style.display = "block"; // y cambiar su propiedad display a block
}

function hideImage(myIndex) { // Tiene que capturar del document la imagen con índice myIndex
  sliderImages[myIndex].style.display = "none"; // y cambiar su propiedad display a none
}
