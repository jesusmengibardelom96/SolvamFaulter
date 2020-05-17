<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";

    $consulta = $conexion -> query("SELECT * FROM Alumno");

    $arrayAlumnos = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayAlumnos[] = $fila;
    }

    echo json_encode($arrayAlumnos);
    
?>