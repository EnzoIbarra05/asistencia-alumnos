var alumnosNombre=[];
// Objeto para almacenar las faltas de cada alumno
let faltasAlumnos = {};

// Inicializa cada alumno con 0 faltas (puedes hacerlo al agregar cada alumno)
alumnosNombre.forEach(alumno => {
faltasAlumnos[alumno] = 0;
});

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
let nombre = (document.getElementById("añadoAlumno").value.toLowerCase());

alumnosNombre.push(nombre);
    alert("Alumno agregado con exito!");

eliminarInput();
}



function mostrarAlumnos(event) {
    if(event) event.preventDefault();
    let tablaBody = document.getElementById("tablaBody");
    tablaBody.innerHTML = "";
    
    for (let alumno of alumnosNombre) {
        // Se usa el valor almacenado en faltasAlumnos, en vez de poner 0 fijo
        tablaBody.innerHTML += `
        <tr>
            <td>${alumno}</td>
            <td id="faltas-${alumno}">${faltasAlumnos[alumno]}</td>
            <td><button onclick="sumaFaltas('${alumno}', event)">Presente</button></td>
        </tr>
        `;
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

function sumaFaltas(nombre, event) {
    if(event) event.preventDefault();

    // Incrementa el contador en el objeto faltasAlumnos
    faltasAlumnos[nombre] = (faltasAlumnos[nombre] || 0) + 1;
    
    // Actualiza la celda correspondiente
    document.getElementById("faltas-" + nombre).textContent = faltasAlumnos[nombre];
}