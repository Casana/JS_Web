class Formulario {

    constructor() {
        this.oDatos = {
            "CuentaCorreo": "",
            "Contraseña": "",
            "Nombre": "",
            "PrimerApellido": "",
            "SegundoApellido": "",
            "DNI": "",
            "FechaNacimiento": "",
            "Domicilio": "",
            "Ciudad": "",
            "CódigoPostal": "",
        };

        this.oOtros = {
            "Aficiones": "",
            "Formacion": "",
            "Experiencia": "",
        };

        this.oCurso = {

        };

        this.oPago = {

        };

        this.oParrafo = document.getElementById("listaDatos");
        // referencia del párrafo donde escribir

        document.getElementById("btnSubmit").addEventListener("click",
            this.recogeDatos.bind(this));
    }

    recogeDatos(oE) {
        this.oDatos.CuentaCorreo = document.getElementById("correo").value;
    }
}




//document.getElementById("comentarios").value;