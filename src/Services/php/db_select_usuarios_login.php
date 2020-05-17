<?php
    header('Access-Control-Allow-Origin: *');
    include 'connection.php';
    //echo "Hola";

    $consulta = $conexion -> query("SELECT *, Cursos.NombreSolvam FROM Usuarios INNER JOIN Cursos ON Cursos.Nombre = Usuarios.Tutor  ORDER BY NombreUsuario ASC");

    $arrayUsuarios = array();
    while($fila = mysqli_fetch_assoc($consulta)){
        //$arrayLSEstudiantes[] = $fila;
        $arrayUsuarios[] = $fila;
    }

    echo json_encode($arrayUsuarios);
?>