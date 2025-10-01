<?php


function busquedalineal($lista, $elementoBuscado) {
    for ($i = 0; $i < count($lista); $i++) {
        if ($lista[$i] === $elementoBuscado) {
            return $i;
        }
    }
    return -1; // No encontramos el elemento
}

// Ejemplo práctico con estudiantes del FSJ30
$estudiantes = [
    "Alejandro", "Alvin", "Andrea", "Alejandra"
];

$posicion = busquedalineal($estudiantes, "Andrea");

if ($posicion !== -1) {
    echo "Encontré a Andrea en la posición: " . $posicion . "\n";
    echo "En la lista está como: " . $estudiantes[$posicion] . "\n";
} else {
    echo "Andrea no está en la lista del FSJ30\n";
}

function buscarPupusas($lista, $pupusaBuscada){

    foreach($lista as $index => $pupusa){
        if($pupusa === $pupusaBuscada){
            return $index;
        }
    }
    return -1; // Retorna -1 si no se encuentra la pupusa
}

$listaPupusas = [
    "queso", "frijol", "revuelta", "loroco", "chicharrón", "ayote", "ajo"
];

$posicion = buscarPupusas($listaPupusas, "revuelta");
if($posicion != -1){
    echo "La pupusa se encuentra en la posición: " . $posicion;
} else {
    echo "La pupusa no se encuentra en la lista.";
}
?>




