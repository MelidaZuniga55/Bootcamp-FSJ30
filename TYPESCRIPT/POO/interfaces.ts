/* Ejemplo De uso de Interface en POO */

//Ejemplo simple -> No es una estructura que usariamos en un proyecto


class Animal{
    //Encapsulamiento -> Limitamos el acceso a nombre y especie
    private nombre:string;
    private especie:string;

    constructor(nombreParam:string,especieParam:string){
        this.nombre = nombreParam;
        this.especie = especieParam;
    }

    comer():string{
        return "Estoy comiendo"
    }

    getAnimal():Animal{
        return this;
    }
}

let d10s:Animal = new Animal("m","chucho");
console.log(d10s.getAnimal());

//el extends nos avisa que esta usando el pilar de Herencia
class Gato extends Animal implements IAnimal{
    //Tenemos 2 atributos publicos, NO HAY ENCAPSULAMIENTO
    raza:string;
    color: string;

      constructor(nombreParam:string,especieParam:string,razaParam:string,colorParam:string){
        super(nombreParam,especieParam);
        this.raza = razaParam;
        this.color = colorParam;
    }

    hacerRuido():string{
        return "miau re miau"
    }
}

//Implements le avisa a JS y TS que la clase Perro OBLIGATORIAMENTE tiene que tener lo que declara IAnimal
class Perro extends Animal implements IAnimal{
    raza:string;
    color: string;

      hacerRuido():string{
        return "wau re miau, perdon wau"
    }
}

interface IAnimal{
    //LOS ATRIBUTOS TIENEN QUE QUEDAR PUBLICOS
    raza:string;
    color:string;

    //LOS METODOS TIENEN QUE QUEDAR PUBLICOS
    hacerRuido():string;
}