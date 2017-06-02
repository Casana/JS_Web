class Formulario {

    constructor() {

        this.domCurso = document.querySelector("#cursos")
        this.domEspecialidad = document.querySelector("#especialidades")
        this.oEspecialidades = {
            HTML: ["Diseño de webs", "Mantenimiento de webs", "Orientado a objetos", "Diseño libre"],
            CSS: ["Apariencia de webs", "Apariencia de aplicaciones", "Creación de estilos", "Bootstrap"],
            JavaScript: ["Core", "Orientado a webs", "jQuery", "Angular"],
            PHP: ["XAMPP", "LAMP", "WAMP", "MAMP", "UwAmp"]
        }

    }

    seleccion(aCursos) {
        switch (aCursos) {
            case "HTML":
                this.cargarSelect(this.domEspecialidad, this.oEspecialidades.HTML)
                this.valCurso = this.domCurso[0].nextSibling.data;
                this.domEspecialidad.classList.remove("oculto");
                break;

            case "CSS":
                this.cargarSelect(this.domEspecialidad, this.oEspecialidades.CSS)
                this.valCurso = this.domCurso[1].nextSibling.data;
                this.domEspecialidad.classList.remove("oculto");
                break;

            case "JavaScript":
                this.cargarSelect(this.domEspecialidad, this.oEspecialidades.JavaScript)
                this.valCurso = this.domCurso[2].nextSibling.data;
                this.domEspecialidad.classList.remove("oculto");
                break;
            case "PHP":
                this.cargarSelect(this.domEspecialidad, this.oEspecialidades.PHP)
                this.valCurso = this.domCurso[2].nextSibling.data;
                this.domEspecialidad.classList.remove("oculto");
                break;
            case "nada":
                this.domEspecialidad.className = "oculto";
                break;
        }
    }

}