<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);
    $nombre = utf8_decode($request->Nombre);
    $apellido1 = utf8_decode($request->Apellido1);
    $apellido2 = utf8_decode($request->Apellido2);
    
    $cosulta = $conexion -> query("INSERT INTO Alumno (NIA, Nombre, Apellido1, TelefonoA, TelefonoP, CorreoA, TelefonoM, CorreoP, CorreoM, Apellido2, NombreCurso) 
        VALUES ($request->NIA, '$nombre', '$apellido1', $request->TlfA, $request->TlfP, '$request->CorreoA', $request->TlfM, '$request->CorreoP', '$request->CorreoM', '$apellido2', '$request->Grupo');");
    
?>