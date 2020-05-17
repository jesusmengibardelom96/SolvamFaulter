<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";

    $consulta = $conexion -> query("SELECT * FROM Cursos");

    $arrayAsignaturas = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayAsignaturas[] = $fila;
    }

    echo json_encode($arrayAsignaturas);

?>