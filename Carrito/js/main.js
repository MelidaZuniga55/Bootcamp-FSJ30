//console.log("Holiwis");
const contenedorCarrito = document.getElementById('cuerpo-carrito');
let cursosCarrito = [];

function vaciarCarrito(evento){
    console.log("Soy el vaciar carrito");
    cursosCarrito=[];
    contenedorCarrito.innerHTML="";
}

function agregarCurso(evento){
    console.log("Soy el agregar curso");
    
    let curso = leerDatosCurso(evento.target.parentElement.parentElement);
    console.log(curso);

    // Chequeamos si el curso existe previamente y guardamos true o false
    const existe = cursosCarrito.some((cursoArr) => cursoArr.id == curso.id);

    if(existe){
        cursosCarrito.map((cursoArr) => { 
            if(cursoArr.id === curso.id){
                cursoArr.cantidad += 1;
                
                // Transformamos el string a numero (quitamos el $ y convertimos)
                let precioNumerico = parseFloat(cursoArr.precio.substring(1));
                
                // Calculamos el nuevo precio basado en el precio unitario original
                // Guardamos el precio unitario si no existe
                if(!cursoArr.precioUnitario) {
                    cursoArr.precioUnitario = precioNumerico;
                }
                
                // Calculamos el nuevo precio total
                let nuevoPrecio = cursoArr.precioUnitario * cursoArr.cantidad;
                
                // Devolvemos el precio a su formato original
                cursoArr.precio = `$${nuevoPrecio.toFixed(2)}`;

                return cursoArr;
            }
        });
    } else {
        // Guardamos el precio unitario para futuros cálculos
        curso.precioUnitario = parseFloat(curso.precio.substring(1));
        cursosCarrito.push(curso);
    }
    console.log(cursosCarrito);
    pintarCarritoHTML();
}

function leerDatosCurso(curso){
    console.log(curso);
    
    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('h5').textContent,
        cantidad: 1 
    }

    return infoCurso;
}

function pintarCarritoHTML(){
    // Limpiar el html del carrito antes de mapear los datos
    contenedorCarrito.innerHTML = "";

    cursosCarrito.forEach((curso) => { 
        // Crear una fila
        let fila = document.createElement('tr');

        // Asignar los valores en celdas
        fila.innerHTML = `
        <td><img src="${curso.imagen}" width="80"/></td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>
        `;

        contenedorCarrito.appendChild(fila);
    });
}

function eliminarCurso(id){
    console.log(id);

    // Buscamos el curso en el carrito
    const cursoIndex = cursosCarrito.findIndex(curso => curso.id == id);
    
    if(cursoIndex !== -1) {
        const curso = cursosCarrito[cursoIndex];
        
        if(curso.cantidad > 1) {
            // Si hay más de 1, reducimos la cantidad
            curso.cantidad -= 1;
            
            // Recalculamos el precio
            let nuevoPrecio = curso.precioUnitario * curso.cantidad;
            curso.precio = `$${nuevoPrecio.toFixed(2)}`;
        } else {
            // Si solo hay 1, lo eliminamos completamente
            cursosCarrito.splice(cursoIndex, 1);
        }
    }

    pintarCarritoHTML();
}