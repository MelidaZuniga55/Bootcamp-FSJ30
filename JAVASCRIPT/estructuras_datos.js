//Estructuras de datos

//Datos primitivos -> string, interger , float, double, bool, null 
// UNDEFINED -> VACIO PARA EL SISTEMA
let vacio = null;
console.log(vacio);

vacio = "string re estandar";
console.log(vacio);


// Objetos
// Objetos literales
// Ejemplo: Formulario con datos de usuario
let perro = {
    //clave : valor
    nombre: "Chochan",
    edad: 4
}

let perro2 = {
    //clave : valor
    nombre: "Pepito",
    edad: 18
}

//Mostrar una caracteristica del perro
console.log(perro.nombre);

// POO -> Programacion Orientada a Objetos
// Forma de escribir el codigo -> Reutilizable

// Clases y objeto
// Clase -> Molde
// Objeto -> Instancia*  de una clase  *Creamos algo en base a 

class Persona {
    // Caracteristicas de esa clase -> Atributos/Propiedades
    // Constructor -> METODO PARA CREAR OBJETOS a traves de este molde
    constructor(nombreParam,edadParam){ 
        // this -> APUNTAMOS A ESTA CLASE 
        this.nombre = nombreParam;
        this.edad = edadParam;
    }


    // Metodos -> Funciones, cosas que hace esta clase
    correr( ){ 
        console.log("Estoy corriendo.");
        return "Estoy corriendo.";
    }
}

//Utilizar el constructor de Persona -> INSTANCIAR OBJETOS
let personita = new Persona("Jairo",27);
let personita2 = new Persona("Alejandro",20);
console.log(personita);
console.log(personita2);

// Acceder a algo de un objeto
personita.correr();


// PILARES DE POO -> OOP
// Existen para asegurarnos un codigo mas escalable, flexible y seguro
// 4 Pilares

// PILARES QUE SI SE PUEDEN UTILIZAR EN JAVASCRIPT
// Herencia -> Una clase hija de otra, copia el comportamiento del padre
// Polimorfismo -> Cambiar el comportamiento de un metodo del padre, con respecto a su hijo

//Herencia
class Programador extends Persona {
    constructor(nombreParam, edadParam, lenguajesParam){
        //Seguir usando las propiedades/caracteristicas del padre
        //super() Recibe en sus parentesis, los parametros del constructor del padre
        super(nombreParam,edadParam);

        //Caracteristicas propias de programador
        this.lenguajesProgra = lenguajesParam;
    }

    //Metodo propio de programador
    codear(){
        console.log("Estoy codeando");
        
    }

    //Polimorfismo
    // Sobreescritura de metodo
    correr(){
        //super.correr();
        console.log("No corro tan rapido, pero puedo trotar.");
    }
}



//Crear un programador
let programador = new Programador("Jairo",27,"Javascript");
console.log(programador);
programador.nombre = "Luz";
console.log(programador);
programador.correr();


//PILARES QUE NO SE PUEDEN UTILIZAR CON JAVASCRIPT
// Encapsulamiento -> LIMITAR EL ACCESO A LA INFORMACION DE UNA CLASE -> Modificadores de acceso
// Abstraccion -> Nos da herramientas o metodos para acceder a informacion encapsulada


// ARRAYS 
//Array indexado -> Ordena en indice 0 en adelante
let arraycitoIdx = [18,19,25,33];

console.log(arraycitoIdx[0]);

// "Array asociativo" -> Guardamos en clave y valor
let arrayAsociativo = {
    nombre:  "Jairo"
}

console.log(arrayAsociativo['nombre']);

// Array multidimensional
// Creamos un array con varias dimensiones (Array dentro de array)
let arraycitoMulti = [ [ 1,2],[{ nombre : "Jairo"}]];
console.log(arraycitoMulti);

// Accedemos a la posicion 0 -> ES LA PRIMERA DEL ARRAY
let cajaDeIndiceCero = arraycitoMulti[0];
// Imprimir el 2 
console.log(cajaDeIndiceCero[1]);

// Accedemos a la indice 1 
let cajaDeIndiceUno = arraycitoMulti[1];
// Accedemos a la caja para poder ver su contenido
console.log(cajaDeIndiceUno[0]);

//Estos console log muestran el nombre
console.log(cajaDeIndiceUno[0].nombre);
console.log(arraycitoMulti[1][0].nombre);


//Metodos para arrays
//let nombres = ["Darwin", "Luz","Alejandra","Kevin"];

//Dar vuelta un array
//console.log(nombres.reverse());
let nombresAlReves = nombres.reverse();

//Recorrer arrays
//Foreach -> Recorre el array y nos deja utilizar, la posicion y el indice del array
nombresAlReves.forEach( (value,index) => { 
    console.log(index);
    console.log(value);
})

/* 
for(let value of nombres){
    console.log(value);
}
*/ 

//Metodos Utiles
//Map -> Recorre el array y nos retorna algo por cada posicion -> transformar valores
let nombres = ["Darwin", "Luz","Alejandra","Kevin"];

let nombresMayus = nombres.map((value) => {
    return value.toUpperCase()
});
console.log(nombresMayus);

let numeritos = [1,3,5,7];

let numeritosPorDos = numeritos.map((value) => {
    return value*2;
})

console.log(numeritosPorDos);

//Filtrar la informacion
//Filter -> filtramos la info y la retornamos en base a una condicion

const usuarios = [{
    nombre:"Yami",
    edad:20
},{
    nombre:"Jorge",
    edad: 28
},
{
    nombre:"Jose",
    edad: 18

}]
//array.filter ((apodoValorDeCadaPosicion) => {return CONDICION A CUMPLIR})
const mayoresDe21=usuarios.filter((usuario)=>{ return usuario.edad > 21 })
console.log(mayoresDe21);

//Find -> Buscamos y RESTORNAMOS un solo dato

const usuarioJorge = usuarios.find(usuario => usuario.nombre==="Jorge")

console.log(usuarioJorge);

//Metodos OBLIGATORIOS
let array = []
//Agregar datos al array
//AL FINAL
array.push(2);

array.unshift(1);


//Eliminar datos del array
//AL FINAL
array.pop();

//AL PRINCIPIO
array.shift();
console.log(array);

//Obtener el largo de un array
let largor=array.length;
console.log(largor);

//Strings
//La propiedad length sirve tambien para strings, que feliz que soy con js :)
console.log("holiwis".length);

//Metodo para eliminar los espacios al principio y al final
let sinEspacio = "Holiwis Jairo".trim();
console.log(sinEspacio);
console.log(sinEspacio.length);


