<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);

    $consulta = $conexion -> query("UPDATE Asignaturas
    SET ProfesorId = null
    WHERE ProfesorId = $request->id;");
    
    $consulta = $conexion -> query("DELETE FROM Usuarios WHERE id = $request->id");
    
?>