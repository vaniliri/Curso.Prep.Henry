// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 20;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - null === 5;
false

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;
false

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
false


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código: return str; 
}


function sumarDosNumeros(d,f) {
     var suma =  'd + f';                                                                             
  return suma;                                                                                 
}
sumarDosNumeros (8, 9); // 16

  function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  
}
function sumarDosNumeros(x,y) { 
    var suma = 'x + y' ;
return suma;
} 
sumarDosNumeros (5, 5); // 10

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  
}
function resta(t,h) {  
  // var resta = 't- h' ;
return resta;
}
restarDosNumeros (4-3); // 1

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  
}

function multiplica(r,y) {
 // var Multiplica = 'a * a';
 return multiplicacion;
 }

multiplicaDosNumeros (4*4); // 16

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  
}
function divide(t,w) {
  var division = 'o / q';
  return division;
}
dividirDosNumeros (8/2); // 4

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function sonIguales(tp,t) {
// var ('perro ¡== gato');
  }
identificarIguales (perro = gato) // false

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function tienenMismaLongitud (str1, str2 ) { 
 var tienenMismaLongitud = ('rio', 'lago');
 return str1.length === str2.length
}


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  
}
function menosQueNoventa(num) {
  if ( 80 > 90) {
    return true;
}
return false; 
}
menosQueNoventa(80); // true
function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  
}
function mayorQueCincuenta(num) {
  if (45 > 50) { 
    return false;
  }
return true; 
}
mayorQueCincuenta(45); // false

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  
}
function obtenerResto(a,b) {
var producto = a % b;
}
obtenerResto(21 % 5); // 1

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
}
function esPar (num) {
  if (2) {
    return true;
  }
return false; }
esPar(2); // true

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function esImpar (num) {
  if (5) { 
    return true;
  }
return false; }
esPar(5); // true

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
}

function elevarAlCuadrado(num) {
  Math.pow = '7* 7';
  return Math.pow;
}
elevarAlCuadrado (7*7); // 49

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
}
function elevarAlCubo(num) {
  Math.pow = '7* 7';
  return Math.pow;
}
elevarAlCubo (7*7); // 49 

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
}
function elevar(num, exponent) { 
  Math.pow = '2,2';
  return Math.pow;
}
elevar(2,2); // 4 

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
}
function redondearNumero(num) { 
  Math.round = '6.5';
  return Math.round;
}
redondearNumero(6.5); // 7 

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
}

function redondearHaciaArriba(num) { 
Math.ceil = '5.001'
  return Math.ceil;
}
redondearHaciaArriba(5.001); // 6 

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
}
 function numeroRandom(min,max) {
return Math.floor((Math.random()* ( max - min + 1 )) + min)
 }


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
}
function esPositivo(num) {
if (1 + 1 === 2) {
  console.log('El numero es positivo');
}
if (entero) {
  console.log('Este código será omitido');
} else if (true) {
  console.log('Este código correrá');
} else if (true) {
  console.log('Este código NO correrá');
}
function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código: 
  function agregarSimboloExclamacion(str) {
nuevaString = '!Elisa'
    return nuevaString ('!Elisa')
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código: 
  function combinarNombres(nombre, apellido) {
    console.log ('Vanessa Liria');
  }
  combinarNombres('Vanessa Liria')
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  function obtenerSaludo(nombre) {
    console.log ('Hola ' , + nombre);
  }
  obtenerSaludo('Vanessa');
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  var Area= 'a* b';
  return Area;
}
obtenerAreaRectangulo(4* 6) // 24


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}
function retornarPerimetro(alto, ancho) {
  var Area= 'c* f';
  return Area;
}
retornarPerimetroo(5* 6) // 30

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}
function areaDelTriangulo(alto, ancho) {
  var Area= 'x* z';
  return Area;
}
areaDelTriangulo(5* 8) // 40

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
} 
  return euro * 1.2;


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}
if (letra.lenght > 1) {
  return 'dato Incorrecto'
}
if ( letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u');
return 'esVocal'
{ 
  return 'dato Incorrecto'
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
}}}
