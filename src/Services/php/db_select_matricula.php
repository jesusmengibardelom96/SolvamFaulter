<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);
    $consulta = $conexion -> query("SELECT 
    Alumno.Nombre, 
    Alumno.Apellido1, 
    Matricula.HorasFaltadasTotales, 
    Matricula.Id,
    Matricula.Id_Alumno,
    Asignaturas.NombreAsig,
    Matricula.Id_Asignatura
   FROM 
    Alumno 
    INNER JOIN Matricula ON Matricula.Id_Alumno = Alumno.NIA 
    INNER JOIN Asignaturas ON Matricula.Id_Asignatura = Asignaturas.id 
   WHERE 
    Asignaturas.NombreAsig = '$request->nombre'
    ORDER BY Alumno.Apellido1 ASC");

    $arrayMatricula = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayMatricula[] = $fila;
    }

    echo json_encode($arrayMatricula);


?>