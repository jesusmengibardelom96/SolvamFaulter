<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);

    $consulta = $conexion -> query("INSERT INTO Mensajes 
    (MensajeId, fecha, textoMensaje, IdMatricula, HorasFaltadas, Enviado, idAsig, idAlumno) 
    VALUES ($request->idMess ,'$request->fecha', '$request->textoMensaje', $request->idMatricula, $request->horas, 0, $request->idAsig, $request->idAlumno)");
    
?>