window.onload = function() {
    document.getElementById("Correo").innerHTML = function(fechaHoy) {
        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        var f = new Date();
        document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
    }
    document.getElementById("Correo").innerHTML = fechaHoy()
}

function main()

var domFormulario = document.getElementById("formulario");
var domClave1 = document.getElementById("pass1");
var domClave2 = document.getElementById("pass2");

var msg = "";
if (clave1.value != clave2.value) {
    msg = "Las contraseñas no coinciden"
}
domPass2.setCustomValidity(msg)

main()