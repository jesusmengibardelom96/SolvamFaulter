<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";
    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);

    $consulta = $conexion -> query("UPDATE Asignaturas
    SET ProfesorId = $request->idProf 
    WHERE NombreAsig = '$request->Asignatura'");

?>