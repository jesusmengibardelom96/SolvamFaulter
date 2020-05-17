<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";

    $consulta = $conexion -> query("SELECT * FROM Usuarios ORDER BY id ASC");

    $arrayUsuarios = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayUsuarios[] = $fila;
    }

    echo json_encode($arrayUsuarios);
?>