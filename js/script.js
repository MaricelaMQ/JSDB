var estudiantes = [];

/********************************/
var i = 0
var registro = document.getElementById("btRegistro");
var mayornota = document.getElementById("mayorNota");
var menornota = document.getElementById("menorNota");
var promedio = document.getElementById("promedio");

registro.addEventListener("click", registrarEstudiante);
mayornota.addEventListener("click", mostrarMayorNota);
menornota.addEventListener("click", mostrarMenorNota);
promedio.addEventListener("click", mostrarPromedio);



function registrarEstudiante() {
    var codigo_ = document.getElementById("codigo").value;
    var nombre_ = document.getElementById("nombre").value;
    var nota_ = parseFloat(document.getElementById("nota").value);

    if (isNaN(nota_) || codigo_ == "" || nombre == "") {
        alert("Información faltante o errónea");
    } else {

        var nuevoEstudiante = new Estudiante(codigo_, nombre_, nota_)
        if (guardarEstudianteJSON(nuevoEstudiante) == false) {
            return;
        }
        var tabla = document.getElementById("tablaEstudiantes");

        var filaFinal;
        var fila;

        filaFinal = tabla.rows.length;
        fila = tabla.insertRow(filaFinal);

        var celda0 = fila.insertCell(0).innerHTML = nuevoEstudiante.codigo;
        var celda1 = fila.insertCell(1).innerHTML = nuevoEstudiante.nombre;
        var celda2 = fila.insertCell(2).innerHTML = nuevoEstudiante.nota;

        console.log(estudiantes[0].nombre);

        document.getElementById("codigo").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("nota").value = "";
    }
}

function Estudiante(cod, nom, not) {
    this.codigo = cod;
    this.nombre = nom;
    this.nota = not;
}

function guardarEstudianteJSON(json) {
    for (i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].codigo == json.codigo) {
            alert("No pueden haber dos estudiantes con el mismo código");
            return false;
        }
    }
    estudiantes[estudiantes.length] = json;
    return true;

}

//*****************CALCULAR MAYOR NOTA
function calcularMayorNota(json) {
    var MayorNota = 0;
    var pos = 0;
    var aux = "";
    if (json.length < 1) {
        alert("No existe información para mostrar ");
    } else {
        for (i = 0; i < json.length; i++) {
            if (json[i].nota > MayorNota) {
                MayorNota = json[i].nota;
                pos = i;
                console.log(aux);
            }
        }
        aux = json[pos].nombre;
        alert("La Mayor Nota es: " + aux + " - " + json[pos].nota);
    }
    // document.getElementById("mayornota").innerHTML = "La Mayor Nota es: " + aux + " - " + json[pos].nota;
}

//******************CALCULAR MENOR NOTA

function calcularMenorNota(json) {
    
    var MenorNota = 0;
    var pos = 0;
    var aux = "";
    
    if (json.length < 1) {
        alert("No existe información para mostrar ");
    } else {
        MenorNota = json[0].nota;
        for (i = 0; i < json.length; i++) {
            if (json[i].nota < MenorNota) {
                MenorNota = json[i].nota;
                pos = i;

                console.log(aux);
            }
        }
        aux = json[pos].nombre;
        alert("La Menor Nota es: " + aux + " - " + json[pos].nota);
    }
}

//******************CALCULAR PROMEDIO

function calcularPromedio(json) {
    var out = "-----------Promedio-----------<br>";
    var Promedio = 0;
    var pos = 0;
    var Suma = 0;
    var aux = "";
    var Notas = json.length
    if (json.length < 1) {
        alert("No existe información para mostrar ");
    } else {
        for (i = 0; i < json.length; i++) {

            Suma = Suma + json[i].nota;
        }
        Promedio = Suma / Notas

        alert("El Promedio es: " + Promedio);
    }
}

function mostrarMayorNota() {
    calcularMayorNota(estudiantes);
}

function mostrarMenorNota() {
    calcularMenorNota(estudiantes);
}

function mostrarPromedio() {
    calcularPromedio(estudiantes);
}