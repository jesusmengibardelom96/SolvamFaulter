<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);

    $consulta = $conexion -> query("UPDATE Matricula
    SET HorasFaltadasTotales = $request->horasTotales 
    WHERE Id = $request->idMatricula AND Id_Asignatura = $request->idAsig");
    
?>