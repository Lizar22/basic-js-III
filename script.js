// Ejercicios números

function suma(num1, num2) {
    console.log(num1 + num2)
}
suma (3, 4);

function resta(num1, num2) {
    console.log(num1 - num2)
}
resta (14, 4);

function multiplicacion(num1, num2) {
    console.log(num1 * num2)
}
multiplicacion(3, 4);

function divi(num1, num2) {
    console.log(num1 / num2)
}
divi (22, 5);

function ponencia(base, exponente) {
    console.log(base ** exponente)
}
ponencia(7, 8);

function resto(num1, num2) {
    console.log(num1 % num2)   
}
resto(9, 2);

function raiz(num1) {
    console.log(Math.sqrt(num1))   
}
raiz(9);

function valorAbsoluto(num1) {
    console.log(Math.abs(num1))   
}
valorAbsoluto(-74);

function redondeo(num1) {
    console.log(Math.round(num1))   
}
redondeo(34.77);

function numRandom() {
    console.log(Math.random())   
}
numRandom();


// Ejercicios letras

suma("Hola", " caracola")

function longitud(text) {
    console.log(text.length)   
}
longitud("Mesas");

function mayusculas(text) {
    console.log(text.toUpperCase())   
}
mayusculas("teléfono");

function minusculas(text) {
    console.log(text.toLowerCase())   
}
minusculas("TELÉFONO");

function posicion(text) {
    console.log(text.charAt(3))   
}
posicion("Probando");

function invertir(text) {
    let arrayLetras = text.split('');
    let arrayInvertido = arrayLetras.reverse();
    let textInvertido = arrayInvertido.join('');
    console.log(textInvertido);   
}
invertir("Patata");


// Ejercicios Arrays

function sumaElementos(array) {
    let suma = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log(suma);   
}
let valores = [1, 2, 3, 4, 5];
sumaElementos(valores);

function calcularPromedio(array) {
    let suma = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    const promedio = suma / array.length;
    console.log(promedio);
}
let valorArray = [30, 8, 50, 60];
calcularPromedio(valorArray);

function ordenarArray(array) {
    let arrayOrdenado = array.sort((acumulador, valorActual) => acumulador - valorActual);
    console.log(arrayOrdenado);   
}
let nuevoArray = [5, 8, 3, 6, 2];
ordenarArray(nuevoArray);

function arrayMayorACinco(array) {
    let resultado = array.filter(i => i > 5);
    console.log(resultado);   
}
let otroArray = [9, 2, 7, 33, 0, 87, 1];
arrayMayorACinco(otroArray);

function concatenarArray(array1, array2) {
    let arrayConcatenado = array1.concat(array2);
    console.log(arrayConcatenado);   
}
let primerArray = ["Mochila", "Estuche", "Libros"];
let segundoArray = ["Calculadora", "Portátil", "Cascos"];
concatenarArray(primerArray, segundoArray);


// Ejercicios Objetos literales

function devolverNombre(objeto) {
    console.log(objeto.nombre);
}
const persona = { nombre: "Rania", apellido: "Lowe", edad: 34, nacionalidad: "Jordania"};
devolverNombre(persona);

function cambiarEdad (objeto, nuevaEdad) {
    objeto.edad = nuevaEdad;
    console.log(objeto.edad);
}
cambiarEdad(persona, 22);

function contarPropiedades(objeto) {
    let numeroPropiedades = Object.keys(objeto)
    console.log(objeto);
}
contarPropiedades(persona);

function eliminarPropiedad(objeto, propiedadABorrar) {
    delete objeto[propiedadABorrar];
    console.log(objeto);
}
eliminarPropiedad(persona, "nacionalidad");

function comprobarPropiedad(objeto, propiedadAComprobar) {
    let comprobacion = objeto.hasOwnProperty(propiedadAComprobar);
    console.log(comprobacion);
}
comprobarPropiedad(persona, "edad");
