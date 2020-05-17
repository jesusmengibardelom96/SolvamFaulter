<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);

    $consulta = $conexion -> query("UPDATE Mensajes
    SET Enviado = 1
    WHERE MensajeId = $request->idMess");
    
?>