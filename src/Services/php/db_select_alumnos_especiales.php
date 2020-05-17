<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";

    $consulta = $conexion -> query("SELECT 
    Alumno.Nombre, 
    Alumno.Apellido, 
    AlumnosEspeciales.tipo, 
    Usuarios.NombreUsuario 
   FROM 
    Alumno 
    INNER JOIN AlumnosEspeciales ON AlumnosEspeciales.alumnoId = Alumno.id 
    INNER JOIN Usuarios ON AlumnosEspeciales.tutor = Usuarios.id");

    $arrayAlumnosEsp = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayAlumnosEsp[] = $fila;
    }

    echo json_encode($arrayAlumnosEsp);
    
?>