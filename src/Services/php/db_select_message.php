<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";
    
    $consulta = $conexion -> query("SELECT * FROM Mensajes ORDER BY MensajeId ASC");

    $arrayMatricula = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayMatricula[] = $fila;
    }

    echo json_encode($arrayMatricula);

?>