// script.js

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario
    const form = document.querySelector('form');

    // Escucha el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        // Evita el envío del formulario para mostrar el mensaje
        event.preventDefault();

        // Toma el valor del campo de correo electrónico
        const email = document.getElementById('email').value;
        
        // Toma el valor de la contraseña
        const password = document.getElementById('contraseña').value;

        // Aquí puedes agregar una validación simple si lo deseas
        if (email && password) {
            alert(`Bienvenido, ${email}! Has iniciado sesión.`);
            // Si quisieras enviar el formulario después de mostrar el mensaje:
            // form.submit();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});