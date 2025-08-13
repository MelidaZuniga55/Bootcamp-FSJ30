import './App.css'
import Saludo from './components/Saludo.jsx'

function App() {


  return (
    <>{ /* este es el fragment-> no dibuja un contenedor en el html */}

      <h1>Holiwis</h1>
      { /* este es el primer componente */}
      <Saludo 
      nombre='Meli' 
      apellido="Zuniga" 
      />
      <Saludo nombre='Jose' apellido="Mendez" />
      <Saludo nombre='Jesus' apellido="Galdamez"/>
      <Saludo nombre='Mayerli' apellido="Martinez"/>

    </>
  )
}

export default App