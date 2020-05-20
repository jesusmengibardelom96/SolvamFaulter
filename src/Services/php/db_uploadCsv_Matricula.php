<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);
    
    
    $consulta = $conexion -> query("INSERT INTO Matricula (Id, Id_alumno, Id_Asignatura, HorasFaltadasTotales)
        VALUES ($request->Matricula ,$request->NIA, $request->Asignatura, 0)");
    
?>