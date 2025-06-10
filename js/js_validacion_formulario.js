// **** JS PARA LA VALIDACIÓN DE CAMPOS DE FORMULARIO **** //

//variables y constantes: 
const maxCaracteres = 1000;

// campos del formulario:
const formulario = document.getElementById('form-contacto');
const campoNombre = document.getElementById('dato-usuario');
const campoCorreo = document.getElementById('dato_email');
const campoTelefono = document.getElementById('dato_telefono');
const areaTematica = document.getElementById('area_tematica');
const campoComentarios = document.getElementById('dato_consulta');
const mensajeCaracteres = document.querySelector('.mensaje-caracteres');
const campoClausulas = document.getElementById('dato_acepto_clausulas');
const camposLlamada = document.querySelectorAll('#campos-llamada input[type="radio"]');

// Mensajes de error:
const errorNombre = document.getElementById('error-nombre');
const errorEmail = document.getElementById('error-email');
const errorTelefono = document.getElementById('error-telefono');
const errorMomentoLlamada = document.getElementById('error-momento-llamada');
const errorTematica = document.getElementById('error-tematica');
const errorConsulta = document.getElementById('error-consulta');
const errorClausulas = document.getElementById('error-clausulas');

// Expresiones regulares para algunos campos:
const patronNombre = /^[\wñáéíóú]{2,20}$/i;
const patronCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const patronTelefono = /^[+]?[0-9]{1,5}?[-. \\\\]?\(?[0-9]{1,6}?\)?[-. \\\\]?[0-9]{1,6}[-. \\\\]?[0-9]{1,6}[-. \\\\]?[0-9]{1,6}$/;

// Contar caracteres escritos cada vez que se detecta evento input
function contarCaracteres() {
    const numeroCaracteres = campoComentarios.value.length;
    mensajeCaracteres.innerHTML = `Caracteres disponibles ${maxCaracteres - numeroCaracteres}`;

    if (numeroCaracteres > maxCaracteres) {
        mensajeCaracteres.classList.add('exceso-caracteres');
    } else {
        mensajeCaracteres.classList.remove('exceso-caracteres');
    }
}

campoComentarios.addEventListener('input', contarCaracteres);

// Evento para llamar a la validación: 
formulario.addEventListener('submit', (evento) => {
    // Evitamos envío de formulario
    evento.preventDefault();

    // Vaciamos mensajes de error:
    document.querySelectorAll('.mensajes-error').forEach((elemento) => { elemento.innerText = ""; });

    // Obtenemos valor actual de los campos:
    const valorNombre = campoNombre.value.trim();
    const valorCorreo = campoCorreo.value.trim();
    const valorTelefono = campoTelefono.value.trim();
    const valorComentarios = campoComentarios.value.trim();
    const valorClausulas = campoClausulas.checked;
    const valorMomentoLlamada = Array.from(camposLlamada).some(radio => radio.checked);
    const valorTematica = areaTematica.value;

    // Chequeamos los campos
    if (!patronNombre.test(valorNombre)) {
        errorNombre.innerText = 'Escriba su nombre empleando entre 2 y 20 caracteres';
        campoNombre.focus();
        return;
    }

    if (!patronCorreo.test(valorCorreo)) {
        errorEmail.innerText = 'Debe insertar un correo electrónico válido';
        campoCorreo.focus();
        return;
    }

    if (!patronTelefono.test(valorTelefono)) {
        errorTelefono.innerText = 'Debe insertar un teléfono válido';
        campoTelefono.focus();
        return;
    }

    if (!valorMomentoLlamada) {
        errorMomentoLlamada.innerText = 'Debe seleccionar cuando desea que le llamemos';
        return;
    }

    if (valorTematica === "") {
        errorTematica.innerText = 'Elija un área temática';
        areaTematica.focus();
        return;
    }

    if (valorComentarios.length === 0 || /^\s*$/.test(valorComentarios)) {
        errorConsulta.innerText = 'Los comentarios son obligatorios';
        campoComentarios.focus();
        return;
    }

    if (valorComentarios.length > maxCaracteres) {
        errorConsulta.innerText = 'El comentario supera el máximo de caracteres';
        campoComentarios.focus();
        return;
    }

    if (!valorClausulas) {
        errorClausulas.innerText = 'Debe aceptar las cláusulas';
        campoClausulas.focus();
        return;
    }

    formulario.submit();
});

contarCaracteres();
