// Mostrar el día de la semana
document.addEventListener('DOMContentLoaded', function () {
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const currentDate = new Date();
    const day = daysOfWeek[currentDate.getDay()];
    document.getElementById('day').textContent = `Hoy es: ${day}`;
});

// Sticky Header cuando haces scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Enviar el formulario de contacto
function enviarFormulario() {
    // Recoge los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Muestra un mensaje de confirmación
    alert("Gracias por contactarnos, en un momento nos pondremos en contacto con usted via Whatsapp.");

    // Opcional: Limpiar el formulario después de enviar
    document.querySelector('form').reset();
}

