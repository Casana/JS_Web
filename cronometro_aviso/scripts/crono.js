var time

function pideTiempo() {
    time = prompt("¿Dentro de cuantos segundos quieres que te avise?");

    function cronometro() {
        alert("Ya han pasado los " +
            time + "segundos que programaste.")
    };



}

let = window.setTimeout(function() {
    pideTiempo();
}, time)