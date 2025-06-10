let indice = 0;
const imagenes = document.querySelectorAll('.imagenes');
const total = imagenes.length;

function mostrarImagen(indiceNuevo) {
  if (indiceNuevo < 0) indiceNuevo = total - 1;
  if (indiceNuevo >= total) indiceNuevo = 0;
  imagenes.forEach((img, i) => {
    img.style.display = i === indiceNuevo ? 'flex' : 'none';
  });
  indice = indiceNuevo;
}

document.getElementById('izquierda').addEventListener('click', () => {
  mostrarImagen(indice - 1);
});

document.getElementById('derecha').addEventListener('click', () => {
  mostrarImagen(indice + 1);
});

mostrarImagen(indice);