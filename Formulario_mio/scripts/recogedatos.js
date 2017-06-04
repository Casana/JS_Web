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
            "Curso": "",
            "Especialidad": "",

        };

        this.oPago = {
            "TipoTar": "",
            "NumTar": "",
        };

        this.oParrafo = document.getElementById("listaDatos");
        // referencia del párrafo donde escribir

        document.getElementById("btnSubmit").addEventListener("click",
            this.recogeDatos.bind(this));
    }

    recogeDatos(oE) {
            this.oDatos.CuentaCorreo = document.getElementById("correo").value;
            this.oDatos.Contraseña = document.getElementById("cont").value;
            this.oDatos.Nombre = document.getElementById("name").value;
            this.oDatos.PrimerApellido = document.getElementById("ape1").value;
            this.oDatos.SegundoApellido = document.getElementById("ape2").value;
            this.oDatos.DNI = document.getElementById("dni").value;
            this.oDatos.FechaNacimiento = document.getElementById("fecha").value;
            this.oDatos.Domicilio = document.getElementById("domic").value;
            this.oDatos.Ciudad = document.getElementById("ciudad").value;
            this.oDatos.CódigoPostal = document.getElementById("cp").value;

            //llamada a la función que procesara el objeto presentandolo en pantalla
            this.escribeDatos();
            oE.preventDefault();
            //anula el comportamiento por defecto de submit
        } //Fin del método recogeDatos

    escribeDatos() {
            //ocultar formulario
            document.getElementById("formul").classList.toggle("oculto")
                //mostrar bloque div para el resultado
            document.getElementById("resultado").classList.toggle("oculto");
            //incorporamos a la lista cada elemento del objeto		
            for (var i in this.oDatos) {
                this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                    this.oDatos[i] + "</strong></li>";
            };
        } //Fin del método escribedatos	

} // Fin de la clase Formulario

class App {

    static main() {

        document.addEventListener("DOMContentLoaded",
            function() {
                new Formulario()
            }, false);
    }

} // Fin de la clase App


App.main()