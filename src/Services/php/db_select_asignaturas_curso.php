<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";
    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);
    $consulta = $conexion -> query("SELECT * FROM Asignaturas WHERE Curso = '$request->Grupo'");

    $arrayAsignaturas = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayAsignaturas[] = $fila;
    }

    echo json_encode($arrayAsignaturas);

?>