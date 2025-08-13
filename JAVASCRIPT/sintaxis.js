// Comentarios -> Deshabilitar lineas
/* 
    Multi
    Lineas
*/

//Impresiones en consola

console.log('Holiwis');


// Variables y constantes
let variable = "Jairo";
//var variablecita = "VR";

const numero = 3.1416;
console.log(numero);


//Concatenacion -> SUMA DE ALGO A UN STRING
console.log("Hola "+variable);

console.log("5"+5);

// Cambiar los tipos de valores o variables
// ParseInt
let cinco = parseInt("5");
console.log(cinco+5);

//Operadores Matematicos
let suma = 5+5;
let resta = 10-5;
let division = 4/2;
let multiplicacion = 2*2;
let residuo = 10%2;

//Operadores logicos
// OR ||  AND && NOT ! 

//Operadores comparacion
// Igualdad, desigual
let igualdad = "5" == 5; 
console.log(igualdad);
let igualdadEstricta = "10" === 5;
console.log(igualdadEstricta);

let desigual = "5" != 5;
let desigualdadEstricta = "5" !== 5;

//Operadores de comparaciones numericas
let mayorQue = 5 > 3;
let menorQue = 5 < 3;
let mayorIgual = 5 >= 3;
let menorIgual = 5 <= 3;


//Estructuras de control o condicionales

if(false){
    console.log("Esto funciona");
}else if (true){
    console.log("Aca no llega");
}

switch(opcion){
    case 1: 
    console.log("Se comunico con Administracion");
    break;
    default: 
    console.log("No es una opcion que manejemos");
}

// Ternario
condicion ? "caso true" : "caso false";


//Estructuras Repetitivas o bucles (loops)
while(contador < 5 && contador > 0){
    console.log(contador);
    contador++;   
}

contador = 0;
do{
    console.log(contador);
    contador++; 
} while (contador < 5 && contador > 0);


for(let i = 0; i < 5; i++){
    console.log(i);
}

// Funciones 

function saludar(){
    console.log("Holiwis");
}

// Funciones anonimas
const funcioncita = function () { console.log("Soy anonima"); };

funcioncita();

// Fat Arrow Functions Funciones flecha
const funcionFlecha = () => { console.log("Soy anonima") };
funcionFlecha();

//Callback ???? Una funcion que se pasa como parametro a otra

function saludar(){
    console.log("Holiwis");
}


function funcionQueUsaCallback(callbackfn){
    let nombre = callbackfn();
    
    console.log("Soy la funcion que te ejecuta, saludos "+nombre);
}



/* 
**  FUNCION QUE USA CALLBACK
** NECESITA QUE LE RETORNES UN NOMBRE
*/

funcionQueUsaCallback(  () => { 
    
   return("Jairo");
   
}

)