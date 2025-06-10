/* JAVASCRIPT PARA AMPLIAR IMAGENES AL PULSAR SOBRE ELLAS */

function mostrarModal(modalId, imagenSrc) {
            const modal = document.getElementById(modalId);
            const imagen = modal.querySelector('img');
            imagen.src = imagenSrc;
            modal.style.display = "block";
        }

        function cerrarModal(modalId) {
            document.getElementById(modalId).style.display = "none";
        }

        window.addEventListener('click', function(event) {
            const modales = document.querySelectorAll('.modal');
            modales.forEach(function(modal) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        });