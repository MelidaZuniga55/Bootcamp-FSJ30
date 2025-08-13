//Paradigma -> modelo de programar
// Que programamos bajo unas reglas en especifico
// Codigo reutilizable
// se basa en el uso de objetos y clases para organizar y estructurar el código
// Es un paradigma que está orientada a clases y objetos
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    POO -> Es una forma de ver y pensar el codigo y las soluciones de implementaciones de software
    Vamos a imaginar moldes para poder estandarizar las cosas -> Clases
    Utilizar los moldes para crear funcionalidad en nuestra app -> Objetos
*/
/*  PILARES DE POO o OOP
-   Herencia
-   Polimorfismo

-   Encapsulamiento -> Limitar el acceso a la informacion
* Modificadores de acceso: Public, Protected, Private, Default=Public
-   Abstraccion -> Nos da herramientas(metodos) para acceder a informacion limitada
*/
var Animal = /** @class */ (function () {
    //constructor -> Metodo que se ejecuta al instanciar un objeto de una clase -> NEW
    function Animal(especieParam, edadParam, generoParam, colorParam) {
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam;
        this.color = colorParam;
    }
    //Metodos -> Funciones que van a pertenecer a una clase -> Comportamiento
    Animal.prototype.comer = function () {
        return "Estoy comiendo";
    };
    //Getters y Setters
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setEdad = function (edadParam) {
        this.edad = edadParam;
    };
    //Abstraccion
    Animal.prototype.aumentarEdad = function () {
        this.edad += 1;
    };
    return Animal;
}());
var animalito = new Animal("Chucho", 18, "Masculino", "Blanco");
//Accedemos a un atributo del objeto instanciado(creado en base) de una clase
//console.log(animalito.especie);
//console.log(animalito.edad);
console.log(animalito.getEdad());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(especieParam, edadParam, generoParam, colorParam, razaParam, nombreParam) {
        //Traemos la funcionalidad del constructor del padre
        var _this = _super.call(this, especieParam, edadParam, generoParam, colorParam) || this;
        _this.raza = razaParam;
        _this.nombre = nombreParam;
        return _this;
    }
    Perro.prototype.ladrar = function () {
        return "che wau re wau";
    };
    return Perro;
}(Animal));
var perrito = new Perro("Perro", 5, "Masculino", "Marron", "pichichu mezcla con pitbul", "Chochan");
var Usuario = /** @class */ (function () {
    function Usuario(emailParam, passwordParam) {
        this.email = emailParam;
        this.password = passwordParam;
    }
    Usuario.prototype.login = function (fnConexion) {
        fnConexion(this.email, this.password);
    };
    Usuario.prototype.changePassword = function (newPassword) {
        this.password = newPassword;
    };
    Usuario.prototype.showCredentials = function () {
        return this;
    };
    return Usuario;
}());
var usuarito = new Usuario("jose@meduermo.com", "123456789");
usuarito.changePassword('987654321');
console.log(usuarito.showCredentials());