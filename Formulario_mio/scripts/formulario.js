window.onload = function() {
    document.getElementById("Correo").innerHTML = function(fechaHoy) {
        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        var f = new Date();
        document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
    }
    document.getElementById("Correo").innerHTML = fechaHoy()
}