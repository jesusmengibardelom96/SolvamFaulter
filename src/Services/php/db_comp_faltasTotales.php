<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";

    $recogidaDatos = file_get_contents("php://input");
    $request =json_decode($recogidaDatos);

    $consulta = $conexion -> query("SELECT
    Alumno.Nombre, 
    Alumno.Apellido1, 
    Matricula.id,
    Matricula.Id_Asignatura,
    Matricula.Id_Alumno,
    Matricula.HorasFaltadasTotales,
    Mensajes.fecha,
    SUM(Mensajes.HorasFaltadas) AS horasTotales,
    Mensajes.MensajeId
    FROM Mensajes 
    JOIN Matricula 
    ON Mensajes.idMatricula = Matricula.id
    JOIN Alumno
    ON Matricula.Id_Alumno = Alumno.NIA
    JOIN Asignaturas
    ON Matricula.Id_Asignatura = Asignaturas.id
    WHERE Asignaturas.NombreAsig = '$request->nombAsig' AND DATE(fecha) >= '$request->fechaInicio' AND DATE(fecha) <= '$request->fechaFin' GROUP BY Matricula.id ORDER BY Mensajes.fecha DESC");

    $arrayMatricula = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayMatricula[] = $fila;
    }

    echo json_encode($arrayMatricula);


?>