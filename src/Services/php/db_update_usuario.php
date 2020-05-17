<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";
    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);
    $pass = MD5($request->pass);
    if($request->opc == 'N'){
        $consulta = $conexion -> query("UPDATE Usuarios
        SET NombreUsuario = '$request->userName'
        WHERE NombreUsuario = '$request->userNameAntiguo'"); 
    }else if($request->opc == 'P'){
        $consulta = $conexion -> query("UPDATE Usuarios
        SET Contrasenya = '$pass'
        WHERE NombreUsuario = '$request->userNameAntiguo'");
    }else if($request->opc == 'NyP'){
        $consulta = $conexion -> query("UPDATE Usuarios
        SET NombreUsuario = '$request->userName', Contrasenya = '$pass'
        WHERE NombreUsuario = '$request->userNameAntiguo'"); 
    }

?>