function main() {

    var aCursos = ["HTML", "CSS", "JavaScript", "PHP"];
    var oEspecialidades = {
        "HTML": ["Diseño de webs", "Mantenimiento de webs", "Orientado a objetos", "Diseño libre"],
        "CSS": ["Apariencia de webs", "Apariencia de aplicaciones", "Creación de estilos", "Bootstrap"],
        "JavaScript": ["Core", "Orientado a webs", "jQuery", "Angular"],
        "PHP": ["XAMPP", "LAMP", "WAMP", "MAMP", "UwAmp"]
    };
    var sSeleccionCurso;
    var sSeleccionEspec;

    // elementos del DOM
    var domSelecCurso = document.querySelector("#cursos");
    var domSelecEspec = document.querySelector("#especialidades");

    //manejadores
    domSelecCurso.addEventListener("change", cambioCurso);
    domSelecEspec.addEventListener("change", cambioEspecialidades);
    domSelecEspec.disabled = true;

    cargarSelect(domSelecCursos, aCursos);

    function cambioEspecialidades(oE) {
        var domSelect = oE.currentTarget;
        if (domSelect.childElementCount > oEspecialidades[sSeleccionCurso].length) {
            domSelect.removeChild(domSelect.children[0]);
        }
        var nSelect = domSelect.selectedIndex;
        var domOption = domSelect.options[nSelect]
        sSelectedEspec = domOption.text;
    }

    function cambioCurso(oE) {
        var domSelect = oE.currentTarget;
        if (domSelect.childElementCount > aCursos.length) {
            domSelect.removeChild(domSelect.children[0]);
        }
        let nSelect = domSelect.selectedIndex;
        let domOption = domSelect.options[nSelect];
        sSeleccionCurso = domOption.text;

        cargarSelect(domSelecEspecialidades, oEspecialidades[sSelectedCurso]);
        domSelecEspecialidades.disabled = false;
    }

    function cargarSelect(oDom, aDatos) {
        oDom.innerHTML = "<option> </option>";
        for (var i = 0; i < aDatos.length; i++) {
            oDom.innerHTML += "<option>" + aDatos[i] + "</option>";
        }
    }
}






// Comprobar que ambas contraseñas coinciden:

// var domFormulario = document.getElementById("formulario");
// var domClave1 = document.getElementById("pass1");
// var domClave2 = document.getElementById("pass2");

// var msg = "";
// if (clave1.value != clave2.value) {
//     msg = "Las contraseñas no coinciden"
// }
// domPass2.setCustomValidity(msg)

// main()