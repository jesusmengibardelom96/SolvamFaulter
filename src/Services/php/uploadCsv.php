<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);
    
    $cosulta = $conexion -> query("INSERT INTO Alumno (NIA, Nombre, Apellido1, TelefonoA, TelefonoP, CorreoA, TelefonoM, CorreoP, CorreoM, Apellido2, NombreCurso) 
        VALUES ($request->NIA, '$request->Nombre', '$request->Apellido1', $request->TlfA, $request->TlfP, '$request->CorreoA', $request->TlfM, '$request->CorreoP', '$request->CorreoM', '$request->Apellido2', '$request->Grupo');");
    
?>