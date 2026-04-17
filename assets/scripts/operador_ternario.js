let nombre = prompt ("ingresa tu nombre: ")

if (nombre) {
    alert ("hola " + nombre);
} else {
    alert ("no ingresaste tu nombre");
}

nombre ? alert("hola " + nombre) : alert ("no ingresaste tu nombre")