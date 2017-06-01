$(function() {
    $('span.destacado').each(function() {
        var quote = $(this).clone().removeClass('destacado').addClass('titular')
        $(this).before(quote);
    })
});

$(function() {
    $("#draggable").draggable();
});

//clone es una función de jQuery que crea un objeto vacio y va propiedad por propiedad copiando el objeto inicial.

//necesitamos usar una función each para que no se repitan todos los clones en cada uno de los parrafos:jQuery trabaja de tal forma que es como si tuviesemos un for automatico,como tenemos varios span con clase destacado (es como si tuviesemos un array), el bucle hace todos las acciones que hemos dicho para todos los elementos del "array" span de clase destacado ,each es otro bucle que nos permite controlar como actua en cada vuelta. El this nos sirve para indicar que accion le tiene que aplicar al elemento de esa vuelta del bucle.
//dentro del each siempre va una función anónima. Para referirnos desde el each al elemento que queramos usamos el $this.