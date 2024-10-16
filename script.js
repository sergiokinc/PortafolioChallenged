//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactoForm');

    form.addEventListener('submit', function(event) {
        // Evita el envío del formulario
        event.preventDefault();

        // Obtiene los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validación simple
        let valid = true;

        // Validar el campo de nombre
        if (nombre === '') {
            alert('Por favor, ingresa tu nombre.');
            valid = false;
        }

        // Validar el campo de correo
        if (correo === '') {
            alert('Por favor, ingresa tu correo electrónico.');
            valid = false;
        } else if (!validateEmail(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            valid = false;
        }

        // Validar el campo de mensaje
        if (mensaje === '') {
            alert('Por favor, ingresa un mensaje.');
            valid = false;
        }

        // Si todos los campos son válidos, puedes enviar el formulario o procesarlo aquí
        if (valid) {
            alert('Formulario enviado con éxito!');
            form.reset(); // Reiniciar el formulario
            // Aquí podrías agregar lógica para enviar el formulario a un servidor si es necesario.
        }
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo
        return re.test(String(email).toLowerCase());
    }
});
