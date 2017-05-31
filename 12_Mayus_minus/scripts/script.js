class Formulario {

    constructor() {

        //Creamos el "modelo" corespondiente a todos los elemetos existentes en el DOM

        //oFrase es un puntero hacia la frase(la frase en sí sería oFrase.value)
        this.oDOM = {
            oFrase: document.querySelector("#cadena"),
            oComprobar: document.querySelector("#btnComprobar"),
            oRespuesta: document.querySelector("#solucion")
        };

        console.dir(this.oDOM);
    }

    /**
     * @method controller
     */

    controller() {
        //  Definicion de los manejadores de eventos
        this.oDOM.oComprobar.addEventListener("click", this.actualizarVista.bind(this))

    }

    /**
     * @method actualizarVista
     * @param object oEvent 
     * @return void
     */

    actualizarVista(oEvent) {

        var aMensajes = [
            "Es una combinación de mayusculas y minusculas",
            "Son todo mayusculas",
            "Son todo minusculas"
        ]
        this.oDOM.oRespuesta.innerHTML =
            '<mark> ${aMensajes[this.comprobarFrase()]}  </mark> '
    }

    /**
     * @method comprobarFrase 
     * @param   
     * @return  number
     * La función no recibe ningún parámetro.
     * Comprueba cada caso y nos devuelve un número asignado:
     * number 0 = Mezcla de mayusculas y minusculas
     * number 1 = Todo mayusculas
     * number 2 = Todo minúsculas
     */

    comprobarFrase() {
        let nResponse = 0
        if (this.oDOM.oFrase.value.toUpperCase() === this.oDOM.oFrase.value) {
            nResponse = 1
        } else if (this.oDOM.oFrase.value.toLowerCase() === this.oDOM.oFrase.value) {
            nResponse = 2
        } else {

        }
        return nResponse;
    }


}