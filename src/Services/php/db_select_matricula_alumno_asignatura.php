<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";
    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);
    $consulta = $conexion -> query("SELECT id FROM Matricula WHERE Id_Alumno = $request->NIA AND Id_Asignatura = $request->Asignatura");

    if(mysqli_num_rows($consulta)>0) echo json_encode("taken");
    else echo json_encode("not taken");
    /*
        $arrayAsignaturas = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayAsignaturas[] = $fila;
    }

    echo json_encode($arrayAsignaturas);
    */

?>