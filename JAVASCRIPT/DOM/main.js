console.log("Holiwis");

// Obtener un elemento de FrontendHTML

let elementoDom = document.getElementById ('textoSaludo');
console.log(elementoDom);

let contenidoDom = document.querySelector('#contenido');
console.log(contenidoDom);

const btnApretable = document.querySelector('#botonMagico')
const btnArraycito = document.getElementById('btnArraycito')


// Propiedades de los elementos
// InnerHTML --> Obtiene todo el contenido HTML del contenido
// InnerText --> Obtiene solo el texto del elemento
console.log(elementoDom.innerHTML);
console.log(elementoDom.innerText);

elementoDom.innerHTML = "<h2>Chauchis</h2>"
contenidoDom.innerHTML = "<h3>Este texto esta inyectado con JS</h3>"

// Metodos de los elemnetos
btnApretable.addEventListener('click',() => {
    alert('avada kadavra');
    console.log("Funciono el boton");
   let dato = prompt("Ingresa tu nombre. No preguntes pra que") 
   console.log(dato);
   elementoDom.style.fontFamily = "sans-serif";
   
})

// Metodo de JS
// Almacenar datos en local para el usuario

let arraycito = [1,2,3];
console.log(arraycito);

// LocalStorage --> Almacenamiento local en el navegdor del usuario
// LocalStorage --> esta diseñado para guardar objetos

localStorage.setItem('arraycito',JSON.stringify(arraycito));
let datita = localStorage.getItem('arraycito')
// Mostramos los datos del localStorage que son un string
console.log(datita);

let datitaArray = JSON.parse(datita);
console.log(datitaArray);

//console.log(localStorage.getItem('arraycito')); 
btnArraycito.addEventListener('click', () => {
    console.log("Estoy andando");
    arraycito.push(4);
    console.log(arraycito);   
    localStorage.setItem('arraycito',JSON.stringify(arraycito));
    console.log(localStorage.getItem('arraycito'));
    
})




