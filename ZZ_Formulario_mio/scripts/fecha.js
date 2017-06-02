var mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var diaSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
var fecha = new Date();

var escribeFecha = document.getElementById("fecha")
escribeFecha = innerHTML.diaSemana[fecha.getDay()] + ", " + fecha.getDate() + " de " + mes[fecha.getMonth()] + " de " + fecha.getFullYear();