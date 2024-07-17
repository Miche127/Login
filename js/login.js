function ingresar() {
    window.location.href = 'bienvenida.html';
}

function salir() {
    window.location.href = 'login.html';
}

function ingresarBienvenida() {
    window.location.href = 'informacion.html';
}

function capturarUsuario() {
    window.location.href = 'registro.html';
}

function ingresarInformacion() {
    window.location.href = 'informacion.html';
}

function login() {
    let usuario = document.getElementById('txtusuario').value;
    let password = document.getElementById('txtpassword').value;

    if (usuario == 'Michel' && password == 'Mich3lm!') {
        ingresar();
    } else {
        let errorM = document.createElement("div");
        let error = document.getElementById('error');
        error.innerHTML = '';

        if (!validarContraseña(password)) {
            errorM.innerHTML =
                '<div error="alert alert-danger alert-dismissible fade show" role="alert"><strong> La contraseña debe tener 8 caractere, mayusculas, minusculas, un numero y un caracter</strong> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        } else {
            errorM.innerHTML =
                '<div error="alert alert-danger alert-dismissible fade show" role="alert"><strong>El usuario y contraseña son incorrectos</strong> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        }

        error.append(errorM);
    }
}

function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellidoP").value = "";
    document.getElementById("apellidoM").value = "";
    document.getElementById("nacimiento").value = "";
    document.getElementById("generoM").checked = true;
    document.getElementById("generoH").checked = false;;
    document.getElementById("selCarrera").selectedIndex = 0;
}

function guardar() {
    let nombre = document.getElementById('nombre').value;
    let appaterno = document.getElementById('apellidoP').value;
    let apmaterno = document.getElementById('apellidoM').value;
    let nacimiento = document.getElementById('nacimiento').value;
    let generoM = document.getElementById('generoM');
    let generoH = document.getElementById('generoH');
    let carrera = document.getElementById('selCarrera').value;
    let numeroControl = document.getElementById('numeroControl').value;

    let genero = generoM.checked ? 'Masculino' : 'Femenino';

    if (nombre === '' || appaterno === '' || apmaterno === '' || nacimiento === '' || carrera === '' || numeroControl === '') {
        let errorM = document.createElement("div");
        let error = document.getElementById('error');
        error.innerHTML = '';

        errorM.innerHTML =
            '<div class="alert alert-danger alert-dismissible fade show" role="alert" style=""><strong>Completa Todos los Campos</strong> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        error.append(errorM);
    } else if (!validarMayorEdad(nacimiento)) {
        let errorM = document.createElement("div");
        let error = document.getElementById('error');
        error.innerHTML = '';

        errorM.innerHTML =
            '<div class="alert alert-danger alert-dismissible fade show" role="alert" style=""><strong>Debes ser mayor de edad</strong> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        error.append(errorM);
    } else if (!validarLongitudNumero(numeroControl, 6)) {
        let errorM = document.createElement("div");
        let error = document.getElementById('error');
        error.innerHTML = '';

        errorM.innerHTML =
            '<div class="alert alert-danger alert-dismissible fade show" role="alert" style=""><strong>El número de control debe tener 6 dígitos</strong> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        error.append(errorM);
    } else {
        let datos = {
            nombre: nombre,
            appaterno: appaterno,
            apmaterno: apmaterno,
            nacimiento: nacimiento,
            genero: genero,
            carrera: carrera,
            numeroControl: numeroControl
        };

        let carreras = ['Ing Mecanica', 'Ing Industrial', 'Ing Civil', 'Ing En Sistemas', 'Ing Electronica', 'Ing Electrica', 'Ing Quimica', 'Ing En Gestion Empresarial', 'Lic En Administracion', 'Ing En Cont Publica'];

        let edad = calcularEdad(datos.nacimiento);


        let modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `Nombre : ${datos.nombre} <br> Apellido Paterno : ${datos.appaterno} 
        <br> Apellido Materno : ${datos.apmaterno} <br> Fecha de Nacimiento : ${datos.nacimiento} 
        <br> Edad : ${edad} <br> Genero : ${datos.genero} <br> Carrera : ${carreras[datos.carrera - 1]} <br> Numero de Control : ${datos.numeroControl} 
        s<br> Edad : ${edad} años, ${validarMayorEdad(datos.nacimiento) ? 'Es mayor de edad' : 'No es mayor de edad'}`;
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), focus);
        myModal.show();
    }
}


function limpiarUsuario() {
    document.getElementById("nombreU").value = "";
    document.getElementById("correoU").value = "";
    document.getElementById("contraseñaU").value = "";
}

function guardarUsuario() {
    let nombreU = document.getElementById('nombreU').value;
    let correoU = document.getElementById('correoU').value;
    let contraseñaU = document.getElementById('contraseñaU').value;

    if (nombreU === '' || correoU === '' || contraseñaU === '') {
        let errorM = document.createElement("div");
        let error = document.getElementById('error');
        error.innerHTML = '';

        errorM.innerHTML =
            '<div class="alert alert-danger alert-dismissible fade show" role="alert" style=""><strong>Completa Todos los Campos</strong> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        error.append(errorM);
    } else if (!validarCorreo(correoU)) {
        let errorM = document.createElement("div");
        let error = document.getElementById('error');
        error.innerHTML = '';

        errorM.innerHTML =
            '<div class="alert alert-danger alert-dismissible fade show" role="alert" style=""><strong>Correo electrónico inválido</strong> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        error.append(errorM);
    } else if (!validarContraseña(contraseñaU)) {
        let errorM = document.createElement("div");
        let error = document.getElementById('error');
        error.innerHTML = '';

        errorM.innerHTML =
            '<div class="alert alert-danger alert-dismissible fade show" role="alert" style=""><strong>Contraseña inválida (debe tener al menos 8 caracteres, mayúsculas, minúsculas, números y un carácter especial)</strong> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        error.append(errorM);
    } else {
        let datos = {
            nombre: nombreU,
            correo: correoU,
            contraseñaU: contraseñaU
        };

        let modalBody = document.getElementById('modalBodyUsuario');
        modalBody.innerHTML = `Nombre: ${datos.nombre} <br> Correo electronico: ${datos.correo} 
        <br> Contraseña : ${datos.contraseñaU}`;

        const myModal = new bootstrap.Modal(document.getElementById('exampleModalUsuario'), focus);
        myModal.show();
    }
}