var alumnosNombre=[];

function crearLista(event){

event.preventDefault();
//----------------------Obtengo los valores. ---------------------------
let nroAlumnos=parseFloat(document.getElementById("alumnos").value);

//---------------------Los agrego a un array----------------------------
for (i=0;i<nroAlumnos;i++){
    
alumnosNombre.push(prompt("Ingrese alumno "+ (i+1)).toLowerCase());
}

alert("Alumnos cargados con exito!");

//-----------------Elimino el creador de alumnos------------------------

let contenedor = document.querySelector(".alumnos");
let eliminarElemento = document.querySelector(".elementoEliminar");

if (contenedor && eliminarElemento) {
    contenedor.removeChild(eliminarElemento);
} else {
    alert("No se encontró el contenedor o el elemento a eliminar.");
}
//---------------------------------------------------------------------
}

function añadirAlumnos(event) { 

    event.preventDefault();
let nombre = (document.getElementById("añadoAlumno").value);

alumnosNombre.push(nombre);
    alert("Alumno agregado con exito!");

eliminarInput();
}

function mostrarAlumnos() {
    
    // Selecciona el párrafo correctamente sin el punto
    let parrafo = document.getElementById("muestraAlumnos");
    
    // Limpia el contenido anterior, si es necesario
    parrafo.innerHTML = "";

    // Recorre el arreglo de alumnos y concatena el contenido
    for (let alumno of alumnosNombre) {
        parrafo.innerHTML += `${alumno}<br>`;
    }
}

function eliminarAlumno(event){
    event.preventDefault();
    let nombreElimino=document.getElementById("nombreEliminar").value.toLowerCase();
    
    let incluye=alumnosNombre.includes(nombreElimino);

    if (incluye){
    let index=alumnosNombre.indexOf(nombreElimino);
        alumnosNombre.splice(index,1);
        alert("Alumno eliminado con exito!") ;  
    }else{
        alert("Alumno no encontrado, vuelva a intentarlo.");
    }
}
