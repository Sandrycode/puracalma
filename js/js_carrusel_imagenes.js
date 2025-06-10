// **** JAVASCRIPT PARA CARRUSEL DE IMAGENES **** //

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const galleryImages = document.querySelector('.gallery-images');

let index = 0;
const totalImages = document.querySelectorAll('.gallery-item').length;
const visibleImages = 3; // Cantidad de imágenes visibles a la vez

// Mostrar las imágenes desplazadas
function showImages() {
    const offset = -(index * (100 / visibleImages));  // Cada imagen ocupa un porcentaje del ancho
galleryImages.style.transform = `translateX(${offset}%)`;
}

// Evento del botón de retroceder (izquierda)
prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index -= 1;  // Solo retroceder si no estamos en la primera imagen
         showImages();
    }
});
 
// Evento del botón de avanzar (derecha)
 nextBtn.addEventListener('click', () => {
    if (index < totalImages - visibleImages) {   // Solo avanzar si no estamos al final de la galería
         index += 1;
        showImages();
    }
}); 
