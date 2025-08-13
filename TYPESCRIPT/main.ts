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
let numerito = "Fer jeje saludos"; //JS

//Datos primitivos
let numero:number = 2; //TS
let nombre:string = "Jairo";
let activo:boolean = true;
let vacio: null = null;

//TIPOS DE DATOS QUE VAMOS A ROGAR, REZAR, INTENTAR, JURAR Y PROMETER NO USAR
let nose:any = "PUEDO SER CUALQUIER COSA";
let noDefinido:undefined = undefined;

console.log(numerito);
console.log(numero);

//Declaracion de funciones
function saludar(nombreParam:string):string {
    return `Holiwiis, ${nombreParam}`
}

console.log(saludar("Jairo"));

// Estructuras de datos
// Array
//Vamos a guardar un array de numeros O un array de STRINGS
let arraycito : number[]|string[] = [1,2,3,4];
arraycito = ["as"];

//Vamos a guardar dentro de EL ARRAY, numeros o strings
let arraycitoDobleDato: (number|string)[] = [123,"numero de la suerte",2555]

//arraycito.push("asdad") NO FUNCIONA

// Tupla
let arrayEspecifico : [number,string,string] = [27,"Jairo","otro string"];

//Podemos llegar a tener 2 tipos de datos
// VARIABLE :1TIPO | 2TIPO 
let dosTiposDeDatos:null|string = null

dosTiposDeDatos = "";

//Tipo de dato personalizado

type Persona = {
    name: string,
    age: number
}

let programador: Persona = {name: "Jairo", age: 27};

let fsj30: Persona[] = [{name: "Jairo", age: 27},{name: "Jorge", age: 25}]