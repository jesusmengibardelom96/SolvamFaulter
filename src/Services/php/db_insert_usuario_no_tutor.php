<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";
    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);
    $pass = MD5($request->pass);
    $consulta = $conexion -> query("INSERT INTO Usuarios 
    (id, NombreUsuario, Contrasenya, Tipo) 
    VALUES ($request->id, '$request->usuario', '$pass', '$request->tipo')");

?>