class Ficheros {

    constructor() {

        this.aFiles = [
            "rajoy.txt",
            "rivera.txt",
            "iglesias.txt",
            "trump.txt",
            "macron.txt",
            "saludos.json"
        ]

        // Llamada a la funcion que pinta. También podríamos llamarla al final, al instanciarla.
        this.pintarFicheros()
    }




    pintarFicheros() {
        let oDomInput = document.querySelector('#ficheros');
        oDomInput.innerHTML = ""
        for (let i = 0; i < this.aFiles.length; i++) {
            let sFile = this.aFiles[1];
            oDomInput.innerHTML +=
                <
                option > $(sFile) < /option>;
        }
    }
}