function validarCampos() {
    const email = document.getElementById('mail').value;
    const contrasena = document.getElementById('pass').value;

    if (email && contrasena) {
        console.log('Campos completados');

    } else {
        console.log('Campos vacíos');
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Por favor, completa ambos campos para continuar.'
        })
    }
}


