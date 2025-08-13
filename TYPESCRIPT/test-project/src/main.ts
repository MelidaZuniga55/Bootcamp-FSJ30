import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<h1>Holiwiiiisss</h1>
<button id="btnMagia">MAGIA!</button>
</div>
`
//Hacer que ese BOTON realice un ALERT que diga Chauchis
// Obtenemos el botón del DOM
let btnDOM = document.getElementById('btnMagia') as HTMLButtonElement;
console.log(btnDOM);

// Agregamos el evento para mostrar un alert
btnDOM.addEventListener('click', () => {
  alert('Chauchis');
});
