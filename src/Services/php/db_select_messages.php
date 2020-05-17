<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";
    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);
    $consulta = $conexion -> query("SELECT * FROM Mensajes WHERE Enviado = $request->env ORDER BY fecha DESC");

    $arrayMatricula = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayMatricula[] = $fila;
    }

    echo json_encode($arrayMatricula);

?>