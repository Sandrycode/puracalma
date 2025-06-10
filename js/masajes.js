/* JAVASCRIPT PARA DESPLEGAR DE FORMA LENTA LAS CAJAS */

document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los botones de "Ver más"
    const botonesDesplegar = document.querySelectorAll('.desplegar');

    // Añadir un evento de clic a cada uno
    botonesDesplegar.forEach((boton) => {
        boton.addEventListener('click', function() {
            // Obtener el contenedor de la información adicional
            const masInfo = this.nextElementSibling;

            // Alternar la visibilidad de la información
            if (masInfo.style.maxHeight === '0px' || !masInfo.style.maxHeight) {
                masInfo.style.maxHeight = masInfo.scrollHeight + 'px';
                this.textContent = "Ver menos";
            } else {
                masInfo.style.maxHeight = '0px';
                this.textContent = "Ver más";
            }
        });
    });
});






