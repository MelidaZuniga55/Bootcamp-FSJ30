//Diferencias entre JS y TS
/* JS
- Flexible
- Facil de aprender
- Forma de programar sea a traves de funciones
- (Interpretado ) WEB -> Navegador
*/
/*  TS
- Tipado duro -> YA NO ES TAN FLEXIBLE
- POO -> Forma de programar -> Los pilares estan COMPLETOS
- Un poco mas dificil de aprender
- Compilado (TSC) -> TRADUCIR EL CODIGO DE TS A JS
*/
// Declaracion de variables 
var numerito = "Fer jeje saludos"; //JS
//Datos primitivos
var numero = 2; //TS
var nombre = "Jairo";
var activo = true;
var vacio = null;
//TIPOS DE DATOS QUE VAMOS A ROGAR, REZAR, INTENTAR, JURAR Y PROMETER NO USAR
var nose = "PUEDO SER CUALQUIER COSA";
var noDefinido = undefined;
console.log(numerito);
console.log(numero);
function saludar(nombreParam) {
    return "Holiwiis, ".concat(nombreParam);
}
console.log(saludar("Jairo"));