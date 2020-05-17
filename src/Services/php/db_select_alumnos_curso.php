<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";
    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);

    $consulta = $conexion -> query("SELECT * FROM Alumno WHERE NombreCurso = '$request->curso' ORDER BY Apellido1 ASC");

    $arrayAlumnos = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayAlumnos[] = $fila;
    }

    echo json_encode($arrayAlumnos);
    
?>