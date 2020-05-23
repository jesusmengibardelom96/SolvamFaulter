<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";

    $consulta = $conexion -> query("SELECT 
    Alumno.Nombre, 
    Matricula.HorasFaltadasTotales, 
    Matricula.Id,
    Matricula.Id_Alumno,
    Asignaturas.NombreAsig,
    Asignaturas.Curso,
    Matricula.Id_Asignatura
   FROM 
    Alumno 
    INNER JOIN Matricula ON Matricula.Id_Alumno = Alumno.NIA 
    INNER JOIN Asignaturas ON Matricula.Id_Asignatura = Asignaturas.id
    ORDER BY Matricula.Id
    ");

    $arrayMatricula = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayMatricula[] = $fila;
    }

    echo json_encode($arrayMatricula);


?>