// Mostrar formulario
function mostrarFormulario(formulario) {
    $('.formulario').hide(); // Ocultar formulario
    $('#form-' + formulario).show(); // Mostrar formulario
}

// Validar inicio de sesion
$('#form-login-submit').submit(function(e) {
    e.preventDefault();
    
    var email = $('#form-login-submit input[name="email"]').val();
    var password = $('#form-login-submit input[name="password"]').val();
    var errores = [];

    if (!email) {
        errores.push('Por favor ingrese su correo electrónico.');
    }

    if (!password) {
        errores.push('Por favor ingrese su contraseña.');
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return;
    }

    mostrarAlerta('Inicio de sesión exitoso.', true);
});

// Validar registro
$('#form-registro-submit').submit(function(e) {
    e.preventDefault();
    
    var nombre = $('#form-registro-submit input[name="nombre"]').val();
    var email = $('#form-registro-submit input[name="email"]').val();
    var password = $('#form-registro-submit input[name="password"]').val();
    var errores = [];

    if (!nombre) {
        errores.push('Por favor ingrese su nombre completo.');
    }

    if (!email) {
        errores.push('Por favor ingrese su correo electrónico.');
    }

    if (!password) {
        errores.push('Por favor ingrese su contraseña.');
    } else {
        var erroresContrasena = validarContrasena(password);
        if (erroresContrasena.length > 0) {
            erroresContrasena.forEach(function(error) {
                errores.push(error);
            });
        }
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return;
    }
    mostrarAlerta('Registro exitoso.', true);
});

// Validar recuperar contraseña
$('#form-recuperar-submit').submit(function(e) {
    e.preventDefault();
    
    var email = $('#form-recuperar-submit input[name="email"]').val();
    var errores = [];

    if (!email) {
        errores.push('Por favor ingrese su correo electrónico.');
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return;
    }
    mostrarAlerta('Se ha enviado un correo electrónico para recuperar su contraseña.', true);
});

// Validar modificar perfil
$('#form-modificar-submit').submit(function(e) {
    e.preventDefault();
    
    var nuevoNombre = $('#form-modificar-submit input[name="nuevo-nombre"]').val();
    var nuevoEmail = $('#form-modificar-submit input[name="nuevo-email"]').val();
    var nuevaContrasena = $('#form-modificar-submit input[name="nueva-contrasena"]').val();
    var errores = [];

    if (!nuevoNombre && !nuevoEmail && !nuevaContrasena) {
        errores.push('Por favor ingrese al menos uno de los campos para modificar.');
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return;
    }
    mostrarAlerta('Perfil modificado exitosamente.', true);
});

// Validar la contraseña
function validarContrasena(contrasena) {
    var errores = [];

    //longitud mínima
    if (contrasena.length < 8) {
        errores.push('La contraseña debe tener al menos 8 caracteres.');
    }

    //caracteres especiales
    var caracteresEspeciales = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!caracteresEspeciales.test(contrasena)) {
        errores.push('La contraseña debe contener al menos un caracter especial.');
    }

    // Validar uso de numeros
    var numeros = /[0-9]/;
    if (!numeros.test(contrasena)) {
        errores.push('La contraseña debe contener al menos un número.');
    }

    // Validar uso de letras
    var letras = /[a-zA-Z]/;
    if (!letras.test(contrasena)) {
        errores.push('La contraseña debe contener al menos una letra.');
    }

    return errores;
}

// Errores
function mostrarErrores(errores) {
    var mensaje = 'Por favor corrija los siguientes errores:\n';
    for (var i = 0; i < errores.length; i++) {
        mensaje += '- ' + errores[i] + '\n';
    }
    alert(mensaje);
}

// Mensajes de alerta
function mostrarAlerta(mensaje, exito) {
    var tipo = exito ? 'success' : 'danger';
    var alerta = $('<div class="alert alert-' + tipo + '" role="alert">' + mensaje + '</div>');
    $('#alertas').html(alerta);
    alerta.fadeIn(200).delay(3000).fadeOut(200);
}

// Validar modificar perfil
$('#form-modificar-submit').submit(function(e) {
    e.preventDefault();
    
    var nuevoNombre = $('#form-modificar-submit input[name="nuevo-nombre"]').val();
    var nuevoEmail = $('#form-modificar-submit input[name="nuevo-email"]').val();
    var nuevaContrasena = $('#form-modificar-submit input[name="nueva-contrasena"]').val();
    var errores = [];

    if (!nuevoNombre && !nuevoEmail && !nuevaContrasena) {
        errores.push('Por favor ingrese al menos uno de los campos para modificar.');
    }

    if (nuevaContrasena) {
        var erroresContrasena = validarContrasena(nuevaContrasena);
        if (erroresContrasena.length > 0) {
            erroresContrasena.forEach(function(error) {
                errores.push(error);
            });
        }
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return;
    }
    mostrarAlerta('Perfil modificado exitosamente.', true);
});