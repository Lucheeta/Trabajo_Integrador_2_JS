//Objeto con los datos que ingresarán por Input

const datos = {
	cantidad: "", 
	categoria: "",
	};


// Asigno el valor estudiante a categoría por ser la primera opción

let categoria;
datos.categoria = "estudiante";

//Obtengo los elementos del formulario con ID

const cantidad = document.getElementById("cantidad");
categoria = document.getElementById("categoria");
const totalAPagar = document.getElementById("total");
const btnResumen = document.getElementById("resumen");
const btnBorrar = document.getElementById("borrar");

//Guardo los valores que se ingresaron por input en el objeto creado

cantidad.addEventListener("input", function(event){
    datos.cantidad = event.target.value;
    console.log(`Cantidad ${event.target.value} guardada`);
});

categoria.addEventListener("change", function(event){
    datos.categoria = event.target.value;
    console.log(`Categoria ${event.target.value} guardada`);
});

//Botón resumen

resumen.addEventListener("click", function(event){
    event.preventDefault();
    const {cantidad, categoria} = datos;
    let resultado = 0;    
    let indice = 0;
    indice = totalAPagar.textContent.indexOf("$");
    totalAPagar.textContent = totalAPagar.textContent.substring(0, indice+1);
    if(categoria == "estudiante") {
        resultado = (200*cantidad)*0.2;
    } 
    else if(categoria == "trainee") {
        resultado = (200*cantidad)*0.5;
    }
    else if(categoria == "junior") {
        resultado = (200*cantidad)*0.85;
    }
    console.log(`La categoría seleccionada es ${categoria}`);

    totalAPagar.textContent += resultado;
    return;
});

//Botón borrar

function borrar() {
    form.reset
}
